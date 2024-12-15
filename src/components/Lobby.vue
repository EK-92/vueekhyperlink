<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { genericStore } from '@/stores/generic'
import Chartacter from '@/components/Chartacter.vue'

import logo from "@/assets/logo.png";

defineProps(['input'])

const store = genericStore()
const { darkTheme } = storeToRefs(store)

const themeClass = computed(() => ({
  light: !darkTheme.value
}))
</script>

<template>
  <div class="profile" :class="themeClass">
    <div class="name">
      <img alt="logo" :src="logo" />
      <h1>Efim Krakhalev (EK)</h1>
      <h3>Site Reliability Engineer</h3>
      <h3>Also Front-end Developer</h3>
      <h3>Location: Toronto, ON</h3>
      <Chartacter />
    </div>
    <div class="silhouette">
    </div>
  </div>
</template>

<style scoped>
.profile {
  display: grid;
  grid-template-columns: 55% 45%;
}

.name {
  margin: calc(50vh - 20vw) auto 0;
  display: grid;
  grid-template-columns: 12vw 1fr;

  img {
    grid-row-start: 1;
    grid-row-end: 5;
    width: calc(11.5vw - 2rem);
    max-width: 11.5vw;
    padding: 1rem;
    margin: auto;
    filter: drop-shadow(-1px 1px 2px #bdbdbd) drop-shadow(2px -2px 3px #bdbdbd);
  }

  h1 {
    line-height: 4vw;
    font-size: 3vw;
    margin: 0;
  }

  h3 {
    line-height: 2.5vw;
    font-size: 2vw;
    margin: 0;
  }

  canvas {
    height: 20vw !important;
    width: 40vw !important;
    margin-top: 2vw;
  }
}

.silhouette {
  background: no-repeat center/90% url('@/assets/silhouette.png');
  filter: drop-shadow(2px 1px 2px #bdbdbd) drop-shadow(0px 0px 1px #bdbdbd);
  height: calc(100vh - 4.5vw);
  grid-column-start: 2;
  grid-row: 1 / 3;
}

.light {
  .name img {
    filter: drop-shadow(-1px 1px 2px #757575) drop-shadow(2px -2px 3px #757575);
  }

  .silhouette {
    filter: drop-shadow(2px 1px 2px #bdbdbd) drop-shadow(0px 0px 1px #bdbdbd);
  }
}

@media (max-width: 719px) {
  .profile {
    grid-template-columns: 1fr;
  }
  
  .silhouette {
    display: none;
  }
  .name {
    grid-template-columns: 1fr;
    margin: calc(50vh - 59.5vw) 0;
    text-align: center;

    h1 {
      line-height: 6vw;
      font-size: 5vw;
      margin: 1vw 0 0;
    }

    h3 {
      line-height: 5vw;
      font-size: 4vw;
      margin: 1vw 0 0;
    }

    img {
      width: 25vw;
      padding: 0;
      margin: 10vw auto 10vw;
    }

    canvas {
      height: 40vw !important;
      width: 80vw !important;
      margin: 10vw auto 0;
    }
  }
}

@media (min-width: 1200px) {
  .name {
    h1 {
      line-height: 3vw;
      font-size: 2.5vw;
    }

    h3 {
      line-height: 2vw;
      font-size: 1.8vw;
    }
  }
}

@media (min-width: 1601px) {
  .name {
    img {
      width: 7.5vw;
      max-width: 7.5vw;
    }
  }
}
</style>
