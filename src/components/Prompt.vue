<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { genericStore } from '@/stores/generic'

defineProps(['input'])

const store = genericStore()
const { darkTheme } = storeToRefs(store)

const themeClass = computed(() => ({
  light: !darkTheme.value
}))
</script>

<template>
  <p class="prompt" :class="themeClass"><span>user@ek:~$</span> {{ input }}</p>
</template>

<style scoped>
.prompt {
  font-family: 'Ubuntu+Mono', monospace;
  font-size: 4vw;
  line-height: 5vw;
  word-break: keep-all;
  text-align: left;
  padding: 2.5vw;
  margin: 0 auto;
  background: #171717;
  span {
    color: #eee;
  }
}

.light {
  background: #e0e0e0;
  span {
    color: #212121;
  }
}

@media (min-width: 720px) {
  .prompt {
    font-size: 2vw;
    line-height: 2.5vw;
    padding: 1vw;
  }
}
</style>
