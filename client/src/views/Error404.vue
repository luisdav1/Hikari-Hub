<script>
import { RouterLink } from 'vue-router';
export default {
    components: {
        RouterLink
    }
}
</script>
<template>
    <!-- ====== Error 404 Section Start -->
    <section class="relative z-10 bg-[#fe7e13] py-[120px]">
      <div class="container mx-auto">
        <div class="-mx-4 flex">
          <div class="w-full px-4">
            <div class="mx-auto max-w-[400px] text-center">
              <h2
                class="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]"
              >
                404
              </h2>
              <h4 class="mb-3 text-[22px] font-semibold leading-tight text-white">
                ¡Oops! Esa página no se puede encontrar.
              </h4>
              <p class="mb-8 text-lg text-white">La página que estás buscando puede ser eliminada.</p>
              <RouterLink
                to="/"
                class="inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-white hover:text-[#fe7e13]"
              >
                Ir a Home
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute top-0 left-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14"
      >
        <div class="h-full w-1/3 bg-gradient-to-t from-[#fe7e13] to-[#fe7e1333]"></div>
        <div class="flex h-full w-1/3">
          <div class="h-full w-1/2 bg-gradient-to-b from-[#fe7e1333] to-[#fe7e1300]"></div>
          <div class="h-full w-1/2 bg-gradient-to-t from-[#fe7e1333] to-[#fe7e1300]"></div>
        </div>
        <div class="h-full w-1/3 bg-gradient-to-b from-[#fe7e1333] to-[#fe7e1300]"></div>
      </div>
    </section>
    <!-- ====== Error 404 Section End -->
  </template>