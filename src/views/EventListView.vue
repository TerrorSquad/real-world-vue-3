<script setup>
import EventCard from '@/components/EventCard.vue'
import { ref } from 'vue'

const events = ref([
  {
    id: 1,
    title: 'Event 1',
    date: '2021-01-01',
    time: '13:00',
  },
  {
    id: 2,
    title: 'Event 2',
    date: '2021-01-02',
    time: '14:00',
  },
  {
    id: 3,
    title: 'Event 3',
    date: '2021-01-03',
    time: '15:00',
  },
])
</script>

<template>
  <h1>Events For Good</h1>

  <div class="events">
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
```
