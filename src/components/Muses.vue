<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { genericStore } from '@/stores/generic'

import tux from "@/assets/tux.webp";
import you from "@/assets/you.webp";

defineProps(['input'])

const store = genericStore()
const { darkTheme } = storeToRefs(store)

const themeClass = computed(() => ({
  light: !darkTheme.value
}))
</script>

<template>
  <div class="inspirations page" :class="themeClass">
    <div class="person">
      <p>Yes, you, the one reading this, you inspire me to improve. I don't know who you are, but I am grateful nonetheless.</p>
      <img alt="you" :src="you" />
    </div>
    <div class="person">
      <p>Linux Torvalds gave life to git version control system and of course Linux kernel, which he maintains to this day. Among the kernel mail threads he was part of my favorite one is <a href="https://lkml.org/lkml/2017/11/21/356" target="blank">Do no harm</a></p>
      <img alt="Linus Torvalds" :src="tux" />
    </div>
  </div>
</template>

<style scoped>.inspirations {
  min-height: 100vh;
  max-width: 1400px;
}
.person {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 0;
  text-align: center;
  max-width: 80%;
  margin: 5% 10% 0;
  img {
    max-width: 25vmin;
    margin: 2rem;
    place-self: center;
  }
  h2 {
    font-size: 5vmax;
    /* text-align: right; */
    align-self: center;
  }
  p {
    /* grid-column-start: 1; */
    /* grid-column-end: 3; */
    font-size: 2vmax;
    a {
      text-decoration: none;
      color: #7cb342;
      /* background: #313131; */
      box-shadow:
        2px 2px 2px #111;
        /* -1px -1px 1px #111; */
      cursor: pointer;
      &:hover {
        color: #bdbdbd;
      }
    }
  }
}

.light {
  .person {
    p {
      /* grid-column-start: 1; */
      /* grid-column-end: 3; */
      a {
        color: #7cb342;
        /* background: #313131; */
        box-shadow:
          2px 2px 2px #bdbdbd;
          /* -1px -1px 1px #111; */
        cursor: pointer;
        &:hover {
          color: #111;
        }
      }
    }
  }
}

@media (max-width: 640px) {
  .person {
    max-width: 90%;
    margin: 0 5%;
    grid-template-columns: 1fr;
    img {
      justify-self: center;
    }
    h2 {
      text-align: center;
    }
    p {
      /* grid-column-end: 2; */

      a {
        text-decoration: none;
        color: #7cb342;
        background: #313131;
        box-shadow:
          2px 2px 2px #111,
          -1px -1px 1px #111;
        cursor: pointer;
        &:hover {
          background: #111;
        }
      }
    }
  }
}
</style>
