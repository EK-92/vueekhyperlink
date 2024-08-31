<script setup lang="ts">
import Lobby from '../components/Lobby.vue'
import Prompt from '@/components/Prompt.vue';
</script>

<template>
  <main>
    <Prompt input="whoami" />
    <img alt="logo" class="logo" src="@/assets/logo.png" />
    <Lobby />
  </main>
</template>

<style scoped></style>
