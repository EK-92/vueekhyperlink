<script setup lang="ts">
import Lobby from '@/components/Lobby.vue'
import Epochs from '@/components/Epochs.vue'
import Prompt from '@/components/Prompt.vue'
</script>

<template>
  <main class="home page">
    <Prompt input="whoami" />
    <Lobby />
    <Prompt input="cat ~/.bash_history" />
    <Epochs />
  </main>
</template>

<style scoped>
main {
  position: relative;
}
</style>
