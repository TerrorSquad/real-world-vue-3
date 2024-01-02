import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import AboutView from '../views/AboutView.vue'
import EventDetails from '../views/event/Details.vue'
import EventEdit from '../views/event/Edit.vue'
import EventRegister from '../views/event/Register.vue'

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
      name: 'About',
      component: AboutView,
    },
    {
      path: '/event/:id',
      name: 'EventDetails',
      props: true,
      component: EventDetails,
    },
    {
      path: '/event/:id/register',
      name: 'EventRegister',
      props: true,
      component: EventRegister,
    },
    {
      path: '/event/:id/edit',
      name: 'EventEdit',
      props: true,
      component: EventEdit,
    },
  ],
})

export default router
