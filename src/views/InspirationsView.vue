<script setup lang="ts">
import Prompt from '@/components/Prompt.vue'
import Muses from '@/components/Muses.vue';
</script>

<template>
  <main>
    <Prompt input="ps aux" />
    <Muses />
  </main>
</template>

<style scoped>
</style>