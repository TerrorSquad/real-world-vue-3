import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import AboutView from '../views/AboutView.vue'
import EventDetails from '../views/event/Details.vue'
import EventEdit from '../views/event/Edit.vue'
import EventRegister from '../views/event/Register.vue'
import EventLayout from '../views/event/Layout.vue'

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
      path: '/about-us',
      name: 'About',
      component: AboutView,
    },
    {
      path: '/events/:id',
      name: 'EventLayout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'EventDetails',
          component: EventDetails,
        },
        {
          path: 'register',
          name: 'EventRegister',
          component: EventRegister,
        },
        {
          path: 'edit',
          name: 'EventEdit',
          component: EventEdit,
        },
      ],
    },
    {
      path: '/event/:id',
      redirect: () => {
        return { name: 'EventLayout' }
      },
      children: [
        {
          path: 'register',
          redirect: () => {
            return { name: 'EventRegister' }
          },
        },
        {
          path: 'edit',
          redirect: () => {
            return { name: 'EventEdit' }
          },
        },
        {
          path: '',
          redirect: () => {
            return { name: 'EventDetails' }
          },
        },
      ],
    },
  ],
})

export default router
