<template>
    <main>
      <div class="flex flex-col items-center mt-8 mb-8">
        <div class="container flex justify-between items-center flex-wrap">
          <SearchBar :query="query" @search="handleSearch" />
          <FilterAcordation @filter="handleFilter" />
        </div>
        <div class="container p-4">
          <button
            @click="openAddModal"
            class="px-4 py-2 bg-[#fd7e14] text-white rounded hover:bg-[#ff4e00] focus:outline-none"
          >
            Add New Manga
          </button>
          <NewMangaModal
            :isOpen="isAddModalOpen"
            @close="closeModal"
            @save="saveManga"
          />
          <NewMangaModal
            :isOpen="isEditModalOpen"
            :manga="selectedManga"
            @close="closeModal"
            @save="updateManga"
          />
        </div>
        <div class="flex justify-center container flex-wrap gap-2">
          <MangaCard
            v-for="manga in filteredMangas"
            :manga="manga"
            :key="manga._id"
            :update="true"
            @edit="openEditModal"
            @delete="deleteManga"
          />
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import NewMangaModal from "@/components/MangaModal.vue";
  import MangaCard from "@/components/MangaCard.vue";
  import SearchBar from "@/components/SearchBar.vue";
  import FilterAcordation from "@/components/FilterAcordation.vue";
  import { useMangaStore } from "@/stores/manga.js";
  import { useUserStore } from "@/stores/user.js";
  import { ref, computed } from "vue";
  
  export default {
    components: {
      MangaCard,
      SearchBar,
      FilterAcordation,
      NewMangaModal,
    },
    setup() {
      const query = ref("");
      const selectedCategory = ref(null);
      const mangaStore = useMangaStore();
      const userStore = useUserStore();
      const isAddModalOpen = ref(false);
      const isEditModalOpen = ref(false);
      const selectedManga = ref(null);
  
      const openAddModal = () => {
        isAddModalOpen.value = true;
      };
  
      const openEditModal = (manga) => {
        selectedManga.value = manga;
        isEditModalOpen.value = true;
      };
  
      const closeModal = () => {
        isAddModalOpen.value = false;
        isEditModalOpen.value = false;
        selectedManga.value = null;
      };
  
      const saveManga = ({email,name,author, description, caps, category, img}) => {
        mangaStore.create(email,name,author, description, caps, category, img);
        closeModal();
      };
  
      const updateManga = ({email,name,author, description, caps, category, img}) => {
        mangaStore.update(email,name,author, description, caps, category, img,selectedManga.value._id);
        closeModal();
      };
  
      const deleteManga = (manga) => {
        mangaStore.delete(userStore.user.email, manga._id);
      };
  
      const filteredMangas = computed(() => {
        let filtered = mangaStore.mangas.filter(
          (manga) => manga.publishedByEmail === userStore.user.email
        );
        if (query.value) {
          filtered = filtered.filter((manga) =>
            manga.name.toLowerCase().includes(query.value.toLowerCase())
          );
        }
        if (selectedCategory.value) {
          filtered = filtered.filter((manga) =>
            manga.category.includes(selectedCategory.value)
          );
        }
        return filtered;
      });
  
      const handleSearch = (searchQuery) => {
        query.value = searchQuery;
      };
  
      const handleFilter = (category) => {
        selectedCategory.value = category;
      };
  
      mangaStore.fetchMangas(); // Cargar mangas al montar el componente
  
      return {
        query,
        selectedCategory,
        filteredMangas,
        handleSearch,
        handleFilter,
        isAddModalOpen,
        isEditModalOpen,
        openAddModal,
        openEditModal,
        closeModal,
        saveManga,
        updateManga,
        deleteManga,
        selectedManga
      };
    },
  };
  </script>
  