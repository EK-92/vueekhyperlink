<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { genericStore } from '@/stores/generic'
import { computed } from 'vue'

const store = genericStore()
const { darkTheme, isMenuOpen, showRectanglesButton, showTrianglesButton } = storeToRefs(store)
const { toggleLayout, toggleTheme, toggleMenu } = store

const themeClass = computed(() => ({
  light: !darkTheme.value
}))
</script>
<template>
  <menu :class="themeClass">
    <div class="list" v-if="isMenuOpen">
      <RouterLink to="/" @click="toggleMenu">Home</RouterLink>
      <RouterLink to="/history" @click="toggleMenu">History</RouterLink>
      <button @click="toggleTheme"><p>&#9703;</p></button>
      <button v-if="showTrianglesButton" @click="toggleLayout"><p>&#10702;</p></button>
      <button v-if="showRectanglesButton" @click="toggleLayout"><p class="rectangles">&#9580;</p></button>
    </div>
    <div @click="toggleMenu" class="toggle"></div>
  </menu>
</template>

<style scoped>
menu {
  position: fixed;
  bottom: 7.5vmin;
  right: 5vw;
  display: grid;
  grid-template-columns: 1fr 7.5vw;
  font-size: 4.5vw;
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
  box-shadow: -1px -1px 1px 2px #424242;
  &:active,
  &:focus,
  &:hover {
    box-shadow: -1px -1px 1px 2px #7f7f7f;
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

.list {
  padding: 0;
  list-style: none;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80vw;
  button,
  a {
    align-self: center;
    justify-self: center;
    padding: 1rem 2rem;
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
  .router-link-active {
    display: none;
    color: #7F7F7F;
    pointer-events: none;
    cursor: default;
  }
}

menu.light {
  .toggle {
    background: #fff;
    box-shadow: 1px 1px 1px 2px #7f7f7f;
    &:active,
    &:focus,
    &:hover {
      box-shadow: 1px 1px 1px 2px #212121;
    }
  }
  .list a,
  .list button {
    color: #212121;
    background: #eee;
    box-shadow: 2px 2px 2px #bdbdbd, -1px -1px 1px #bdbdbd;
    &:hover {
      background: #fff;
    }
  }
}

@media (max-width: 639px) {
  .list {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 10vw;
  }

  .toggle {
    width: 10vw;
    height: 10vw;
    display: block;
    margin: 0 auto;
    grid-column-start: 1;
  }

  menu {
    width: 100vw;
    right: 0;
    grid-template-columns: 1fr;
  }
}

@media (min-width: 640px) and (max-width: 1199px) {
  menu {
    grid-template-columns: 1fr 15vw;
  }
  .list {
    font-size: 2vw;
  }
}

@media (min-width: 1200px) {
  .list {
    font-size: 1.5vw;
  }
}
</style>
