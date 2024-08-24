<script setup lang="ts">
import Lobby from '../components/Lobby.vue'
</script>

<template>
  <main>
    <img alt="logo" class="logo" src="@/assets/logo.png" width="125" height="125" />

    <Lobby/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>