<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { genericStore } from '@/stores/generic'

const { content } = defineProps(['content'])

const store = genericStore()
const { darkTheme, triangularLayout } = storeToRefs(store)

const hasLink = computed(() => !!content.link.length)
const cardClass = computed(() => ({
  light: !darkTheme.value,
  triangular: triangularLayout.value,
  routeless: !hasLink.value
}))
</script>

<template>
  <a :href="content.link" class="card" :class="cardClass" target="blank">
    <div class="img-holder">
      <img :src="content.pic" :alt="content.header" />
    </div>
    <h4>{{ content.header }}</h4>
    <p class="subheader">
      <span class="date">{{ content.date }}</span>
      <span>{{ content.subheader }}</span>
    </p>
  </a>
</template>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 20% 80%;
  box-shadow:
    2px 2px 2px #111,
    -1px -1px 1px #111;
  margin: 0.5rem;
  background: #424242;
  color: #7cb342;
  text-decoration: none;
  &:hover {
    background: #000;
  }

  h4,
  p {
    font-size: 4vw;
    line-height: 5vw;
  }
  h4 {
    margin: 1rem 0 0.5rem;
  }
  p {
    margin: 0.5rem 0 1rem;
    .date {
      font-family: 'Ubuntu+Mono', monospace;
      border: 1px solid rgba(255, 255, 255, 0.4);
      padding: 0 0.25rem;
      margin-right: 0.5rem;
      &:empty {
        border: none;
        padding: 0;
        margin: 0;
      }
    }
  }
}

.card.routeless {
  pointer-events: none;
  cursor: default;
}

.triangular {
  /* 12vw 48vw 4vw medium */
  /* 0 72vw 8vw small */
  width: 60vw;
  height: 60vw;
  grid-template-columns: 1fr;
  text-align: center;
  margin: 0;
  &:nth-of-type(4n-2),
  &:nth-of-type(4n-1) {
    clip-path: polygon(0% 0%, 100% 0%, 50% 86.6%);
    grid-template-rows: 10vw 20vw 21.96vw;
    padding: 0;
    .img-holder {
      grid-row: 3 / 4;
      img {
        top: 25%;
      }
    }
    h4 {
      grid-row: 1 / 2;
    }
    .subheader .date {
      grid-row: 2 / 3;
    }
  }

  &:nth-of-type(4n),
  &:nth-of-type(4n + 1) {
    clip-path: polygon(0% 86.6%, 100% 86.6%, 50% 0);
    grid-template-rows: 21.96vw 20vw 10vw;
    padding: 0;
    .img-holder {
      grid-row: 1 / 2;
      img {
        top: 75%;
      }
    }
    h4 {
      grid-row: 3 / 4;
    }
    .subheader .date {
      grid-row: 1 / 2;
    }
  }
  &:nth-of-type(2n-1) {
    margin-left: 0;
    margin-right: -10vw;
  }

  &:nth-of-type(2n) {
    margin-right: 0;
    margin-left: -10vw;
    h4 {
      align-self: center;
    }
  }

  h4,
  p {
    font-size: 3vw;
    line-height: 4vw;
    span {
      margin: auto;
    }
  }

  .subheader {
    display: grid;
    .date {
      max-width: 100%;
      margin: auto;
    }
  }
}

.img-holder {
  grid-row: 1 / 3;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0.1vw 0.1vw 0.2vw #7f7f7f) drop-shadow(-0.1vw 0.1vw 0.2vw #7f7f7f);
  }
}

.light {
  box-shadow:
    2px 2px 2px #bdbdbd,
    -1px -1px 1px #bdbdbd;
  background: #e8e8e8;
  &:hover {
    background: #fff;
  }
  p {
    .date {
      border: 1px solid rgba(0, 0, 0, 0.4);
    }
  }
}

.locked {
  color: #ef9a9a;
  background: #333;
  cursor: auto;
  &:hover {
    background: #333;
  }
}

.future {
  color: #b39ddb;
  background: #333;
  cursor: auto;
  &:hover {
    background: #1a1a1a;
  }
}

@media (max-width: 639px) {
  .img-holder img {
    max-width: 7vw;
    max-height: 7vw;
  }
  .triangular {
    &:nth-of-type(2n-1) {
      margin-right: -12vw;
    }

    &:nth-of-type(2n) {
      margin-left: -12vw;
    }
  }
}

@media (min-width: 640px) {
  .img-holder img {
    max-width: 3vw;
    max-height: 3vw;
  }

  .future {
    p {
      line-height: 0;
      margin: 0;
    }

    h4 {
      margin-top: 1.25rem;
    }
  }
}

@media (min-width: 640px) and (max-width: 1199px) {
  .card {
    &:nth-of-type(2n) {
      margin-right: 2.5rem;
    }
    &:nth-of-type(2n + 1) {
      margin-left: 2.5rem;
    }
    h4,
    p {
      font-size: 1.8vw;
      line-height: 2.2vw;
    }
  }
  .triangular h4,
  .triangular p {
    font-size: 1.8vw;
    line-height: 2.2vw;
  }
  .triangular {
    /* 12vw 48vw 4vw medium */
    /* 0 60vw 10vw small */
    width: 48vw;
    height: 48vw;
    /* 0.625 */
    &:nth-of-type(4n-2),
    &:nth-of-type(4n-1) {
      grid-template-rows: 8vw 16vw 17.568vw;
    }
    &:nth-of-type(4n),
    &:nth-of-type(4n + 1) {
      grid-template-rows: 17.568vw 16vw 8vw;
    }
    &:nth-of-type(n + 3) {
      margin-top: -3.432vw;
    }
    &:nth-of-type(2n-1) {
      margin-left: 12vw;
      margin-right: -11vw;
    }
    &:nth-of-type(2n) {
      margin-right: 12vw;
      margin-left: -11vw;
    }
  }
}

@media (min-width: 1200px) {
  .card {
    &:nth-of-type(2n) {
      margin-right: 2.5rem;
    }
    &:nth-of-type(2n + 1) {
      margin-left: 2.5rem;
    }
    h4,
    p {
      font-size: 1.2vw;
      line-height: 1.4vw;
    }
  }
  .card.triangular {
    /* 12vw 48vw 4vw medium */
    /* 0 60vw 10vw small */
    width: 30vw;
    height: 30vw;

    h4,
    p {
      font-size: 1.2vw;
      line-height: 1.4vw;
    }

    &:nth-of-type(2n) {
      grid-template-rows: 5vw 10vw 10.98vw;
      clip-path: polygon(0% 0%, 100% 0%, 50% 86.6%);
      .img-holder {
        grid-row: 3 / 4;
      }
      h4 {
        grid-row: 1 / 2;
      }
      .subheader {
        grid-row: 2 / 3;
      }
      .img-holder img {
        top: 25%;
      }
    }
    &:nth-of-type(2n + 1) {
      grid-template-rows: 10.98vw 10vw 5vw;
      clip-path: polygon(0% 86.6%, 100% 86.6%, 50% 0);
      .img-holder {
        grid-row: 1 / 2;
      }
      h4 {
        grid-row: 3 / 4;
      }
      .subheader {
        grid-row: 2 / 3;
      }
      .img-holder img {
        top: 75%;
      }
    }
    &:nth-of-type(3n + 2) {
      margin-left: -5vw;
      margin-right: -5vw;
    }
    &:nth-of-type(6n-5) {
      margin-top: 4.03vw;
    }
    &:nth-of-type(6n-4) {
      margin-top: 0.98vw;
    }
    &:nth-of-type(6n-3) {
      margin-top: 4.03vw;
    }
    &:nth-of-type(6n-2) {
      margin-top: 0.98vw;
    }
    &:nth-of-type(6n-1) {
      margin-top: 4.03vw;
    }
    &:nth-of-type(6n) {
      margin-top: 0.98vw;
    }
    &:nth-of-type(6n + 8) {
      margin-top: 0.98vw;
    }
    &:nth-of-type(3n + 1) {
      margin-left: 15vw;
      margin-right: -5vw;
    }
    &:nth-of-type(3n) {
      margin-right: 15vw;
      margin-left: -5vw;
    }
  }
}
</style>
