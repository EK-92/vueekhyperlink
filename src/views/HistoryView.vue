<script setup lang="ts">
import Epochs from '../components/Epochs.vue'
import Prompt from '@/components/Prompt.vue';
</script>

<template>
  <main>
    <Prompt input="cat ~/.bash_history" />
    <Epochs />
  </main>
</template>

<style scoped></style>
