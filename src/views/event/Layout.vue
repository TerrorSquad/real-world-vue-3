<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <RouterLink :to="{ name: 'EventDetails' }">Details</RouterLink>
      |
      <RouterLink :to="{ name: 'EventRegister' }">Register</RouterLink>
      |
      <RouterLink :to="{ name: 'EventEdit' }">Edit</RouterLink>
    </div>
    <RouterView :event="event" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService'
import router from '@/router'
const event = ref(null)
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

onMounted(() => {
  EventService.getEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        router.push({ name: '404Resource', params: { resource: 'event' } })
      } else {
        router.push({ name: 'NetworkError' })
      }
    })
})
</script>
