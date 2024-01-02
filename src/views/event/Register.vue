<script setup>
import router from '@/router'
import { defineProps, inject } from 'vue'

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
})
const GStore = inject('GStore')

const register = () => {
  // if registration API call is successful
  GStore.flashMessage = 'You have registered for the event ' + props.event.title
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)
  router.push({ name: 'EventDetails' })
}
</script>

<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me!</button>
</template>
