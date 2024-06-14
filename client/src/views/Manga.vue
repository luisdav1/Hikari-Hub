<template>
  <main>
    <div class="flex flex-col items-center mt-8 mb-8">
      <div class="container flex justify-between items-center flex-wrap">
        <SearchBar :query="query" @search="handleSearch" />
        <FilterAcordation @filter="handleFilter" />
      </div>
      <div class="flex justify-center container flex-wrap gap-2">
        <MangaCard
          v-for="manga in filteredMangas"
          :manga="manga"
          :key="manga._id"
        >
        </MangaCard>
      </div>
    </div>
  </main>
</template>

<script>
import MangaCard from "@/components/MangaCard.vue";
import SearchBar from "@/components/SearchBar.vue";
import { useMangaStore } from "@/stores/manga.js";
import FilterAcordation from "@/components/FilterAcordation.vue";
import { ref, computed } from "vue";

export default {
  components: {
    MangaCard,
    SearchBar,
    FilterAcordation,
  },
  setup() {
    const query = ref("");
    const selectedCategory = ref(null);
    const mangaStore = useMangaStore();

    const filteredMangas = computed(() => {
      let filtered = mangaStore.mangas;

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
    };
  },
};
</script>





