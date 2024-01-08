import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: () => import('@/views/EventList.vue'),
      props: (route) => {
        return { page: parseInt(route.query.page) || 1 }
      },
    },
    {
      path: '/about-us',
      name: 'About',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/events/:id',
      name: 'EventLayout',
      props: true,
      component: () => import('@/views/event/Layout.vue'),
      children: [
        {
          path: '',
          name: 'EventDetails',
          component: () => import('@/views/event/Details.vue'),
        },
        {
          path: 'register',
          name: 'EventRegister',
          component: () => import('@/views/event/Register.vue'),
        },
        {
          path: 'edit',
          name: 'EventEdit',
          component: () => import('@/views/event/Edit.vue'),
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
    {
      path: '/404/:resource',
      name: '404Resource',
      component: () => import('@/views/NotFound.vue'),
      props: true,
    },
    {
      path: '/network-error',
      name: 'NetworkError',
      component: () => import('@/views/NetworkError.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

export default router
