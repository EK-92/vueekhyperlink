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
  padding: 1rem;
  margin: 0 auto;
  background: #171717;
  max-width: 1400px;
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

@media (min-width: 640px) {
  .prompt {
    font-size: 1.5vw;
    line-height: 2vw;
  }
}
</style>
