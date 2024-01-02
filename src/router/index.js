import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventList,
      props: (route) => {
        return { page: parseInt(route.query.page) || 1 }
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: () => import('../views/EventDetailsView.vue'),
    },
  ],
})

export default router
