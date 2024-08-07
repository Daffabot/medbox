import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('/src/layouts/DefaultLayout.vue')
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: () => import('/src/layouts/AboutLayout.vue')
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;