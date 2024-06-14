<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-[#282c34] rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 class="text-2xl font-bold mb-4">Create New Manga</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium mb-1">Name</label>
          <input
            v-model="name"
            type="text"
            id="name"
            required
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="mb-4">
          <label for="author" class="block text-sm font-medium mb-1"
            >Author</label
          >
          <input
            v-model="author"
            type="text"
            id="author"
            required
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium mb-1"
            >Description</label
          >
          <textarea
            v-model="description"
            id="description"
            required
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <div class="mb-4">
          <label for="category" class="block text-sm font-medium mb-1"
            >Category</label
          >
          <input
            v-model="category"
            type="text"
            id="category"
            required
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="mb-4">
          <label for="img" class="block text-sm font-medium mb-1"
            >Reference Image URL</label
          >
          <input
            v-model="img"
            type="url"
            id="img"
            required
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div class="flex justify-end space-x-2">
          <button
            type="button"
            @click="closeModal"
            class="px-4 py-2 bg-[#282c34] rounded hover:bg-[#1d232a] focus:outline-none"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-[#fd7e14] text-white rounded hover:bg-[#ff4e00] focus:outline-none"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
  
  <script>
import { ref, defineComponent, watch } from "vue";
import { useUserStore } from "@/stores/user";
export default defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close", "save"],
  setup(props, { emit }) {
    const name = ref("");
    const author = ref("");
    const description = ref("");
    const category = ref("");
    const img = ref("");
    const userStore = useUserStore();

    const submitForm = () => {
      const caps = [
        { number: 1, title: "Por defecto", content: "contenido por defecto" },
      ];
      emit("save", {email: userStore.user.email, name: name.value, author: author.value, description: description.value, caps, category: category.value.split(','),img : img.value});
      closeModal();
    };

    const closeModal = () => {
      emit("close");
      resetForm();
    };

    const resetForm = () => {
      name.value = "";
      author.value = "";
      description.value = "";
      category.value = "";
      img.value = "";
    };

    watch(
      () => props.isOpen,
      (newVal) => {
        if (!newVal) {
          resetForm();
        }
      }
    );

    return {
      name,
      author,
      description,
      category,
      img,
      submitForm,
      closeModal,
    };
  },
});
</script>
  
  