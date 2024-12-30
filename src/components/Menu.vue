<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { genericStore } from '@/stores/generic'
import { computed } from 'vue'

const store = genericStore()
const { darkTheme } = storeToRefs(store)
const { toggleTheme } = store

const themeClass = computed(() => ({
  light: !darkTheme.value
}))
</script>
<template>
  <menu :class="themeClass">
    <div @click="toggleTheme" class="toggle">
      <p>&#9703;</p>
    </div>
  </menu>
</template>

<style scoped>
menu {
  position: fixed;
  bottom: 7.5vw;
  right: 5vw;
  display: grid;
  grid-template-columns: 1fr 7.5vw;
  z-index: 99;
}

.toggle {
  text-align: center;
  text-decoration: none;
  background: #000;
  width: 7.5vw;
  height: 7.5vw;
  grid-column-start: 2;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 auto;
  box-shadow: -0.1vw -0.1vw 0.1vw 0.1vw #424242;

  &:active,
  &:focus,
  &:hover {
    box-shadow: -0.1vw -0.1vw 0.1vw 0.1vw #7f7f7f;
  }

  p {
    font-size: 5vw;
    line-height: 7vw;
    /* Safari */
    -webkit-user-select: none;
    /* IE 10 and IE 11 */
    -ms-user-select: none;
    /* Standard syntax */
    user-select: none;
  }
}

button {
  border: none;
}

p {
  margin: 0;
}

.rectangles {
  transform: rotate(-90deg);
}


menu.light {
  .toggle {
    background: #fff;
    box-shadow: 0.2vw 0.2vw 0.1vw 0.1vw #7f7f7f;

    &:active,
    &:focus,
    &:hover {
      box-shadow: 0.2vw 0.2vw 0.1vw 0.1vw #212121;
    }

    p {
      color: #558b2f;
    }
  }
}

@media (max-width: 719px) {
  .toggle {
    width: 10vw;
    height: 10vw;
    display: block;
    margin: 0 auto;
    grid-column-start: 1;

    p {
      font-size: 8vw;
      line-height: 9vw;
    }
  }

  menu {
    width: 100vw;
    right: 0;
    grid-template-columns: 1fr;
  }
}
</style>
