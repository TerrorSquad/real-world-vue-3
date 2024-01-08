<script setup lang="ts">
import type { Ref } from 'vue'

import EventCard from '@/components/EventCard.vue'
import { ref, onMounted, computed, watchEffect, PropType } from 'vue'
import EventService from '@/services/EventService.js'
import { useRouter, RouterLink } from 'vue-router'
import { EventItem } from '@/types'
const router = useRouter()

const props = defineProps({
  page: {
    type: Object as PropType<number>,
    default: 1,
  },
})
const events: Ref<EventItem[]> = ref(null)
const totalEvents: Ref<number> = ref(0)

const page = computed(() => props.page)
const hasNextPage = computed(
  () => Math.ceil(totalEvents.value / 2) > page.value,
)
onMounted(() => {
  watchEffect(() => {
    events.value = null
    EventService.getEvents(2, page.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch(() => {
        router.push({ name: 'NetworkError' })
      })
  })
})
</script>

<template>
  <h1>Events For Good</h1>

  <div class="events">
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    />
    <div class="pagination">
      <RouterLink
        v-if="page != 1"
        id="page-prev"
        rel="prev"
        :to="{ name: 'EventList', query: { page: page - 1 } }"
      >
        &#60; Prev Page
      </RouterLink>
      <RouterLink
        v-if="hasNextPage"
        id="page-next"
        rel="next"
        :to="{ name: 'EventList', query: { page: page + 1 } }"
      >
        Next Page &#62;
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
```
