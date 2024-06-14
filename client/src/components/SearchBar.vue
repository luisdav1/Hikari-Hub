<template>
    <div class="p-4">
      <input
        type="text"
        v-model="localQuery"
        @input="onSearch"
        class="w-full p-2 border rounded-lg focus:outline-none focus:border-[#ff4e00]"
        placeholder="Buscar manga..."
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      query: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        localQuery: this.query
      }
    },
    watch: {
      query(newQuery) {
        this.localQuery = newQuery;
      }
    },
    methods: {
      onSearch() {
        this.$emit("search", this.localQuery);
      },
    },
  };
  </script>
  