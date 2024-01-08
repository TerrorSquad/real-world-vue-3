<script setup lang="ts">
import router from '@/router'
import { EventItem } from '@/types'
import { PropType, inject } from 'vue'

import type { GStoreType } from '@/types'

const props = defineProps({
  event: {
    type: Object as PropType<EventItem>,
    required: true,
  },
})
let GStore: GStoreType = inject('GStore')

const register = () => {
  // if registration API call is successful
  GStore.flashMessage = 'You have registered for the event ' + props.event.title
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)
  router.push({ name: 'EventDetails' })
}
</script>

<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me!</button>
</template>
