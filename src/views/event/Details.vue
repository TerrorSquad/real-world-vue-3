<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { EventItem } from '@/types'

const props = defineProps({
  event: {
    type: Object as () => EventItem,
    required: true,
  },
})
</script>
