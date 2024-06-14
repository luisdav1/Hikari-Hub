<template>
  <div class="min-h-screen p-8">
    <div
      class="max-w-4xl mx-auto bg-[#282c34] rounded-lg shadow-lg overflow-hidden"
    >
      <!-- Imagen del Manga -->
      <img
            
      src="../assets/images/naruto.png"
        alt="Imagen del Manga"
        class="w-full h-80 object-cover"
      />

      <!-- Información del Manga -->
      <div class="p-6">
        <h1 class="text-4xl font-bold mb-2 text-[#fd7e14]">{{ manga.title }}</h1>
        <p class="text-gray-200 mb-4">
          Por: <span class="font-semibold">{{ manga.author }}</span>
        </p>
        <p class="text-gray-300 mb-6">{{ manga.description }}</p>

        <!-- Detalles del Manga -->
        <div class="mb-6">
          <p class="mb-2">
            <span class="font-semibold">Categoría:</span> {{ manga.category }}
          </p>
          <p class="mb-2">
            <span class="font-semibold">Publicado el:</span>
            {{ manga.publishedDate }}
          </p>
          <p>
            <span class="font-semibold">Publicado por:</span>
            {{ manga.publisher }}
          </p>
        </div>

        <!-- Lista de Capítulos -->
        <div>
          <h2 class="text-2xl font-semibold mb-4 text-[#fd7e14]">Capítulos</h2>
          <ul class="space-y-4">
            <li
              v-for="chapter in manga.chapters"
              :key="chapter.number"
              class="p-4 border rounded-lg"
            >
              <div class="flex justify-between items-center mb-2">
                <h3 class="font-bold text-lg">
                  {{ chapter.number }}. {{ chapter.title }}
                </h3>
                <button
                  @click="viewChapter(chapter)"
                  class="bg-[#fd7e14] text-white px-4 py-2 rounded hover:bg-[#ff4e00] transition duration-200"
                >
                  Ver Capítulo
                </button>
              </div>
              <p class="text-gray-400">{{ chapter.content }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        manga: {
          title: 'Naruto',
          author: 'Masashi Kishimoto',
          description: 'Un joven ninja que busca reconocimiento y sueña con convertirse en el Hokage, el líder de su aldea.',
          category: 'Acción, Aventura, Shonen',
          image: '../assets/images/naruto.png', // Reemplaza con la URL de la imagen real
          publishedDate: '2002-09-21',
          publisher: 'Shueisha',
          chapters: [
            { number: 1, title: 'El Comienzo', content: 'Naruto se convierte en un ninja...', id: 1 },
            { number: 2, title: 'El Equipo 7', content: 'Naruto se une al equipo de Kakashi...', id: 2 },
            { number: 3, title: 'Examen Chunin', content: 'Naruto participa en el examen Chunin...', id: 3 },
            // Añade más capítulos según sea necesario
          ]
        }
      }
    },
    methods: {
      viewChapter(chapter) {
        alert(`Ver capítulo: ${chapter.title}`);
        // Aquí puedes redirigir o mostrar el capítulo
      }
    }
  }
  </script>
  
  <style scoped>
/* Opcional: agrega estilos adicionales si es necesario */
</style>