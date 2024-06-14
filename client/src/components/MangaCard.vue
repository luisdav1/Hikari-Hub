<template>
  <div class="flex justify-center mt-8 mb-8 w-[288px] h-[288px]">
    <div class="max-w-sm rounded overflow-hidden shadow-lg relative transform transition-all duration-300 hover:scale-105 group">
      <img class="w-[218px] h-full object-cover transition-opacity duration-300 group-hover:opacity-100" :src="manga.img" alt="Manga Image">
      <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-0 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h2 class="text-white text-xl font-bold group-hover:hidden transition-colors duration-300">{{ manga.name }}</h2>
        <p class="text-white group-hover:hidden transition-colors duration-300">{{ manga.category.join(', ') }}</p>
        <div v-if="update" class="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button @click="editManga" class="text-white bg-[#fd7e14] hover:bg-[#ff4e00] rounded-full p-2 focus:outline-none">
            <i class="fas fa-edit">Editar</i> <!-- Icono de edición -->
          </button>
          <button @click="deleteManga" class="text-white bg-[#fd7e14] hover:bg-[#bd0c03] rounded-full p-2 focus:outline-none">
            <i class="fas fa-trash-alt">Eliminar</i> <!-- Icono de eliminación -->
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MangaCard',
  props: {
    manga: {
      type: Object,
      required: true
    },
    update: {
      type: Boolean,
      default: false
    }
  },
  emits: ['edit', 'delete'],
  setup(props, { emit }) {
    const editManga = () => {
      emit("edit", props.manga);
    };

    const deleteManga = () => {
      emit("delete", props.manga);
    };

    return {
      editManga,
      deleteManga
    };
  }
};
</script>
   
<style scoped>
/* Tailwind CSS ya proporciona los estilos necesarios */
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>
