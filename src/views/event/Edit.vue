<template>
  <p>Edit the event here</p>
</template>

<script setup>
const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>
