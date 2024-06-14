<template>
    <div class="p-4">
      <select
        class="select select-error w-full max-w-xs"
        @change="onFilter"
      >
        <option selected value="">Elige una categoría</option>
        <option v-for="(category, index) in categories" :key="index">
          {{ category.name }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: [
          { name: "Acción"},
          { name: "Aventura"},
          { name: "Fantasía"},
          { name: "Comedia"},
          { name: "Drama"},
          { name: "Romance"},
          { name: "Ciencia Ficción"},
          { name: "Misterio"},
          { name: "Terror"},
          { name: "Deporte"},
          { name: "Slice of Life" },
          { name: "Histórico" },
        ],
      };
    },
    methods: {
      onFilter(event) {
        const selectedCategory = event.target.value;
        this.$emit("filter", selectedCategory);
      }
    },
  };
  </script>
  