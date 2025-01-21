<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { genericStore } from '@/stores/generic'

import github from "@/assets/github.png";
import linkedin from "@/assets/linkedin.png";

defineProps(['input'])

const store = genericStore()
const { darkTheme } = storeToRefs(store)

const themeClass = computed(() => ({
  light: !darkTheme.value
}))
</script>

<template>
  <p class="prompt" :class="themeClass"><span><span class="shell">user@ek:~$ </span>{{ input }}</span><a href="https://www.linkedin.com/in/ek92/" target="blank"><img alt="linkedin" :src="linkedin" /></a><a href="https://github.com/EK-92" target="blank"><img alt="github" :src="github" /></a></p>
</template>

<style scoped>
.prompt {
  font-family: 'Ubuntu+Mono', monospace;
  font-size: 3.5vw;
  line-height: 5vw;
  word-break: keep-all;
  text-align: left;
  padding: 2.5vw 0;
  margin: 0;
  background: #171717;
  display: grid;
  grid-template-columns: 72vw 10vw 10vw;

  span {
    margin-top: 2.5vw;
    margin-left: 0.75vw;
  }
  .shell {
    color: #eee;
  }
  a {
    padding: 2vw;
    margin-left: 1vw;
  }
  img {
    max-width: 4vw;
    /* padding: 0; */
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
    padding: 1vw 0;
    grid-template-columns: 80vw 7.5vw 7.5vw;
  }
  img {
    max-width: 2.5vw !important;
    padding: 0.25vw 0 !important;
    
  }
}
</style>
