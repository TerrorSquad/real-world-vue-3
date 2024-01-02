<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me!</button>
</template>

<script setup>
import router from '@/router'

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
})

const register = () => {
  // if registration API call is successful
  router.push({ name: 'EventDetails' })
}
</script>
