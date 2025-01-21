<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { genericStore } from '@/stores/generic'

import github from "@/assets/github.png";
import linkedin from "@/assets/linkedin.png";

defineProps(['input'])

const store = genericStore()
const { darkTheme } = storeToRefs(store)
const { toggleTheme } = store

const themeClass = computed(() => ({
  light: !darkTheme.value
}))
</script>

<template>
  <div class="prompt" :class="themeClass">
    <span><span class="shell">user@ek:~$ </span>{{ input }}</span>
    <a href="https://www.linkedin.com/in/ek92/" target="blank"><img alt="linkedin" :src="linkedin" /></a>
    <a href="https://github.com/EK-92" target="blank"><img alt="github" :src="github" /></a>
    <div @click="toggleTheme" class="toggle">
      <span>&#9703;</span>
    </div>
  </div>
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
  grid-template-columns: 70vw 8vw 8vw 8vw;

  span {
    margin-top: 1.5vw;
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
  }

  .toggle {
    text-align: center;
    text-decoration: none;
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
    cursor: pointer;
    margin: 1.5vw auto;
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
    grid-template-columns: 75vw 7.5vw 7.5vw 7.5vw;
  }

  img {
    max-width: 2.5vw !important;
    padding: 0 !important;

  }
  .toggle {
    margin: 2.25vw auto !important;
  }
  span {
    margin-top: 2vw !important;
  }
}
</style>
