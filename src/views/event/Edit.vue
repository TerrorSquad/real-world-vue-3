<template>
  <p>Edit the event here</p>
</template>

<script setup lang="ts">
defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>
