<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>
