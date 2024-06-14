<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
const user = computed(() => userStore.user);

const open = ref(false);
const dropdownButtonRef = ref<HTMLButtonElement | null>(null);

const toggleNavbar = () => {
  open.value = !open.value;
};

const navLinkItems = ref([
  { text: 'Mangas', to: '/manga' },
  { text: 'Mis Mangas', to: '/tus_mangas' },
]);

// Custom composition function to handle click outside
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownButtonRef.value && !dropdownButtonRef.value.contains(event.target as Node)) {
    open.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

// Log out function
const logout = () => {
  userStore.clearUser();
};
</script>

<template>
  <header class="flex w-full items-center justify-center bg-[#282c34]">
    <div class="container">
      <div class="relative -mx-4 flex items-center justify-between">
        <div class="w-60 max-w-full px-4">
          <a href="/#" class="w-full py-5 flex items-center gap-1">
            <img src="../assets/icons/icono-Hikari-Hub.svg" alt="logo" />
            Hikari-Hub
          </a>
        </div>
        <div class="flex w-full items-center justify-between px-4">
          <div>
            <button
              @click="toggleNavbar"
              ref="dropdownButtonRef"
              id="navbarToggler"
              class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
            >
              <span class="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              <span class="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              <span class="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
            </button>
            <nav
              :class="{ hidden: !open }"
              id="navbarCollapse"
              class="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-[#1d232a] px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent"
            >
              <ul class="block lg:flex">
                <template v-for="(item, index) in navLinkItems" :key="index">
                  <li>
                    <RouterLink
                      v-if="item.to"
                      :to="item.to"
                      class="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
                    >
                      {{ item.text }}
                    </RouterLink>
                  </li>
                </template>
              </ul>
            </nav>
          </div>
          <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
            <RouterLink v-if="!user" to="/login" class="px-7 py-3 text-base font-medium text-dark hover:text-[#fd7e14] dark:text-white">
              Sign in
            </RouterLink>
            <RouterLink v-if="!user" to="/register" class="rounded-md bg-[#fd7e14] px-7 py-3 text-base font-medium text-white hover:bg-[#ff4e00]">
              Sign Up
            </RouterLink>
            <RouterLink v-if="user" to="/" @click="logout" class="rounded-md bg-[#fd7e14] px-7 py-3 text-base font-medium text-white hover:bg-[#ff4e00]">
              Log out
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

