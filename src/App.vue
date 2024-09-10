<script setup lang="ts">
import { RouterView } from 'vue-router'
import Menu from './components/Menu.vue'
</script>

<template>
  <header>
    <Menu />
  </header>

<RouterView />
</template>

<style scoped></style>
