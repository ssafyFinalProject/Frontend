/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
// import {routes} from 'vue-router/auto-routes'

const routes = import.meta.glob('./src/pages/*.vue')

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: setupLayouts,
  routes,
  // routes: setupLayouts(routes),
  // base: import.meta.env.BASE_URL,
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem("accessToken") && to.path !== '/login' && to.path !== '/signup') {
    next('/login')
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if (to.path === '/board' || to.path === '/board/') {
    next('/board/1');
  } else {
    next();
  }
})

// router.beforeEach((to, from, next) => { 
//   if (to.path==='/login' && localStorage.getItem("accessToken")) {
//     next('/');
//   }
// })


export default router;
