<script setup lang="ts">
import Epochs from '../components/Epochs.vue'
import Prompt from '@/components/Prompt.vue';
</script>

<template>
  <main class="history page">
    <Prompt input="cat ~/.bash_history" />
    <Epochs />
  </main>
</template>

<style scoped>
@media (min-width: 640px) and (max-width: 1199px) {
  .history {
    padding-bottom: calc(50vh - 6rem - 6.6vw);
  }
}

@media (min-width: 1200px) {
  .history {
    padding-bottom: calc(50vh - 6rem - 4.2vw);
  }
}
</style>
