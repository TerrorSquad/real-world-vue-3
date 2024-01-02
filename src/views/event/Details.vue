<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav">
      <RouterLink :to="{ name: 'EventDetails', params: { id } }"
        >Details</RouterLink
      >
      |
      <RouterLink :to="{ name: 'EventRegister', params: { id } }"
        >Register</RouterLink
      >
      |
      <RouterLink :to="{ name: 'EventEdit', params: { id } }">Edit</RouterLink>
    </div>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService'
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
      console.log(error)
    })
})
</script>
