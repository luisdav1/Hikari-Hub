<script setup lang="ts">
import { ref } from 'vue'

const teamItems = ref([
  {
    image: 'https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-04.jpg',
    name: 'Luis David Rodríguez pacheco',
    profession: 'Full-Stack Developer'
  },
  {
    image: 'https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-01.jpg',
    name: 'José Alejandro vizcaíno García',
    profession: 'Front-end Developer'
  },
  {
    image: 'https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-02.jpg',
    name: 'Alejandro cunha londoño ',
    profession: 'UI/UX Designer'
  },
  {
    image: 'https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-03.jpg',
    name: 'Miguel Tapia',
    profession: 'Tester/QA - UI/UX Designer'
  }
])
</script>

<template>
  <!-- ====== Team Section Start -->
  <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20 dark:bg-dark">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[510px] text-center">
            <span class="text-[#fd7e14] mb-2 block text-lg font-semibold"> Nuestro equipo </span>
            <h2 class="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
              Nuestro increible equipo
            </h2>
            <p class="text-body-color text-base dark:text-dark-6">
              Tenemos un grupo de profesionales con fascinantes habilidades en programación y manejo de frameworks
            </p>
          </div>
        </div>
      </div>

      <div class="-mx-4 flex flex-wrap justify-center">
        <template v-for="(item, index) in teamItems" :key="index">
          <div class="w-full px-4 md:w-1/2 xl:w-1/4">
            <div class="mx-auto mb-10 w-full max-w-[370px]">
              <div class="relative overflow-hidden rounded-lg">
                <img :src="item.image" alt="image" class="w-full" />
                <div class="absolute bottom-5 left-0 w-full text-center">
                  <div class="relative mx-5 overflow-hidden rounded-lg bg-[#282c34] dark:bg-dark-2 py-5 px-3">
                    <h3 class="text-dark dark:text-white text-base font-semibold">
                      {{ item.name }}
                    </h3>
                    <p class="text-body-color dark:text-dark-6 text-xs">{{ item.profession }}</p>
                    <div>
                      <span class="absolute left-0 bottom-0">
                        <svg width="61" height="30" viewBox="0 0 61 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="16" cy="45" r="45" fill="#fd7e14" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  <!-- ====== Team Section End -->
</template>
