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

<script setup lang="ts">
import { ref, onMounted, Ref } from 'vue'
import EventService from '@/services/EventService'
import router from '@/router'
import { EventItem } from '@/types'
import { AxiosResponse, AxiosError } from 'axios'

const event: Ref<EventItem> = ref(null)
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

onMounted(() => {
  EventService.getEvent(props.id)
    .then((response: AxiosResponse<EventItem, any>) => {
      event.value = response.data
    })
    .catch((error: AxiosError) => {
      if (error.response && error.response.status === 404) {
        router.push({ name: '404Resource', params: { resource: 'event' } })
      } else {
        router.push({ name: 'NetworkError' })
      }
    })
})
</script>
