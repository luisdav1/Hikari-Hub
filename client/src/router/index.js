import { createRouter, createWebHistory } from 'vue-router'
import Manga from '../views/Manga.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import DetailsManga from '@/views/DetailsManga.vue'
import MisMangas from '@/views/MisMangas.vue'
import { useUserStore } from '@/stores/user.js';
import Error404 from '@/views/Error404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/manga',
    name: 'mangas',
    component: Manga,
    meta: { requiresAuth: true } // Indica que esta ruta requiere autenticación
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/tus_mangas',
    name: 'miManga',
    component: MisMangas,
    meta: { requiresAuth: true } // Indica que esta ruta requiere autenticación
  },{
    path: '/detalles',
    name: 'detalles',
    component: DetailsManga,
    meta: { requiresAuth: true } // Indica que esta ruta requiere autenticación
  }, {
    path: '/:pathMatch(.*)*', // Ruta catch-all para manejar 404
    name: 'Error404',
    component: Error404,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Añadir el guard de navegación
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const user = userStore.user;
  
  if (to.meta.requiresAuth && !user) {
    // Redirige al login si la ruta requiere autenticación y el usuario no está autenticado
    next({ name: 'login' });
  } else {
    next(); // Continua con la navegación
  }
});

export default router;

