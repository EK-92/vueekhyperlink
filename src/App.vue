<script setup lang="ts">
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

import Menu from '@/components/Menu.vue'
import { genericStore } from '@/stores/generic'

const store = genericStore()
const { darkTheme } = storeToRefs(store)

const themeClass = computed(() => ({
  light: !darkTheme.value
}))
</script>

<template>
  <div :class="themeClass">
    <Menu />
    <RouterView />
  </div>
</template>

<style scoped>
div {
  color: #7cb342;
  background: #212121;
}
div.light {
  color: #558b2f;
  background: #f2f2f2;
}
</style>
