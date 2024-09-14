<script setup lang="ts">
import Lobby from '@/components/Lobby.vue'
import Prompt from '@/components/Prompt.vue'
</script>

<template>
  <main class="home page">
    <Prompt input="whoami" />
    <Lobby />
  </main>
</template>

<style scoped>
.home {
  position: relative;
}
</style>
