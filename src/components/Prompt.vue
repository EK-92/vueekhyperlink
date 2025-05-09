<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { genericStore } from '@/stores/generic'

import github from '@/assets/github.webp'
import linkedin from '@/assets/linkedin.webp'

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
    <p class="mainline"><span class="shell">user@ek:~$ </span>{{ input }}</p>
    <a href="https://www.linkedin.com/in/ek92/" target="blank"><img alt="linkedin" :src="linkedin" /></a>
    <a href="https://github.com/EK-92" target="blank"><img alt="github" :src="github" /></a>
    <div @click="toggleTheme" class="toggle">
      <p>&#9703;</p>
    </div>
  </div>
</template>

<style scoped>
.prompt {
  font-size: 2vw;
  line-height: 1.5vw;
  font-family: 'Ubuntu+Mono', monospace;
  word-break: keep-all;
  padding: 0;
  margin: 0;
  background: #171717;
  display: grid;
  grid-template-columns: 75vw 7.5vw 7.5vw 7.5vw;

  .mainline {
    text-align: left;
    margin: 2vw;
  }
  .shell {
    color: #eee;
  }

  a {
    padding: 2vw;
    margin-left: 1vw;
  }

  img {
    max-width: 2vw;
    margin: 0;
    padding: 0;
  }

  .toggle {
    text-align: center;
    text-decoration: none;
    width: 6vw;
    height: 6vw;
    margin: 0;
    border-radius: 50%;
    cursor: pointer;
    p {
      padding: 2vw;
      margin: 0;
      /* Safari */
      -webkit-user-select: none;
      /* IE 10 and IE 11 */
      -ms-user-select: none;
      /* Standard syntax */
      user-select: none;
    }
  }
}

.light {
  background: #e0e0e0;

  .shell {
    color: #212121;
  }
}

@media (max-width: 719px) {
  .prompt {
    font-size: 3.5vw;
    line-height: 5vw;
    padding: 0;
    grid-template-columns: 70vw 8vw 8vw 8vw;
  }

  img {
    max-width: 4vw;
  }
  .toggle {
    margin: 1.5vw auto;
  }
}
</style>
