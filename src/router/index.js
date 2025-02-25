/*
 * @Author: Mike mic.roche@gmail.com
 * @Date: 2025-02-20 10:09:13
 * @LastEditors: Mike mic.roche@gmail.com
 * @LastEditTime: 2025-02-24 14:44:13
 * @FilePath: /se-substantiv/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuizzView from '../views/QuizzView.vue'
import QuizzResultView from '../views/ResultView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/quizz',
      name: 'quizz',
      component: QuizzView,
    },
    {
      path: '/result',
      name: 'result',
      component: QuizzResultView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
