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
const listClass = computed(() => ({
  long: showTrianglesButton.value || showRectanglesButton.value,
  list: isMenuOpen.value
}))
</script>
<template>
  <menu :class="themeClass">
    <div :class="listClass" v-if="isMenuOpen">
      <RouterLink to="/" @click="toggleMenu">Home</RouterLink>
      <RouterLink to="/history" @click="toggleMenu">History</RouterLink>
      <button @click="toggleTheme">
        <p>&#9703;</p>
      </button>
      <button v-if="showTrianglesButton" @click="toggleLayout">
        <p>&#10702;</p>
      </button>
      <button v-if="showRectanglesButton" @click="toggleLayout">
        <p class="rectangles">&#9580;</p>
      </button>
    </div>
    <div @click="toggleMenu" class="toggle">
      <p>&#8801;</p>
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
  box-shadow: -0.4vw -0.4vw 0.2vw 0.2vw #424242;

  &:active,
  &:focus,
  &:hover {
    box-shadow: -0.4vw -0.4vw 0.2vw 0.2vw #7f7f7f;
  }

  p {
    font-size: 7.5vw;
    line-height: 6.5vw;
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

.list {
  padding: 0;
  list-style: none;
  margin: 0 0 0 50vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 40vw;

  button,
  a {
    font-size: 4.5vw;
    line-height: 4vw;
    align-self: center;
    justify-self: center;
    padding: 2vw 4vw;
    text-decoration: none;
    color: #7cb342;
    background: #313131;
    box-shadow:
      0.4vw 0.4vw 0.2vw #111,
      -0.4vw -0.4vw 0.2vw #111;
    cursor: pointer;

    &:hover {
      background: #111;
    }
  }

  .router-link-active {
    display: none;
    color: #7f7f7f;
    pointer-events: none;
    cursor: default;
  }
}

.list.long {
  grid-template-columns: 1fr 1fr 1fr;
}

menu.light {
  .toggle {
    background: #fff;
    box-shadow: 0.4vw 0.4vw 0.4vw 0.2vw #7f7f7f;

    &:active,
    &:focus,
    &:hover {
      box-shadow: 0.4vw 0.4vw 0.4vw 0.2vw #212121;
    }

    p {
      color: #558b2f;
    }
  }

  .list {

    a,
    button {
      color: #212121;
      background: #eee;
      box-shadow:
        0.4vw 0.4vw 0.2vw #bdbdbd,
        -0.4vw -0.4vw 0.2vw #bdbdbd;

      &:hover {
        background: #fff;
      }
    }
  }
}

@media (max-width: 719px) {
  .list {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10vw;
    margin: 0 auto 2vw;
    width: 80vw;
  }

  .toggle {
    width: 10vw;
    height: 10vw;
    display: block;
    margin: 0 auto;
    grid-column-start: 1;

    p {
      font-size: 10vw;
      line-height: 9vw;
    }
  }

  menu {
    width: 100vw;
    right: 0;
    grid-template-columns: 1fr;
  }
}

@media (min-width: 720px) and (max-width: 1199px) {
  menu {
    grid-template-columns: 1fr 15vw;
  }

  .list {

    a,
    button {
      font-size: 2vw;
      line-height: 1.5vw;
    }
  }
}

@media (min-width: 1200px) {
  .list {

    a,
    button {
      font-size: 1.5vw;
      line-height: 1.2vw;
    }
  }
}
</style>
