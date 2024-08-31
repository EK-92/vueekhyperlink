<script setup lang="ts">
defineProps(['input'])
</script>

<template>
  <p class="prompt"><span>user@ek:~$</span> {{ input }}</p>
</template>

<style scoped>
.prompt {
  font-family: 'Ubuntu+Mono', monospace;
  font-size: 4vw;
  line-height: 5vw;
  word-break: keep-all;
  text-align: left;
  padding: 1rem;
  margin: 0 auto;
  background: #171717;
  max-width: 1400px;
  span {
    color: #eee;
  }
}

@media (min-width: 640px) {
  .prompt {
    font-size: 1.5vw;
    line-height: 2vw;
  }
}
</style>
