<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { genericStore } from '@/stores/generic'

const { content } = defineProps(['content'])

const store = genericStore()
const { darkTheme } = storeToRefs(store)

const hasLink = computed(() => !!content.link.length)
const hasSubHeader = computed(() => !!content.subheader.length)
const cardClass = computed(() => ({
  light: !darkTheme.value,
  routeless: !hasLink.value,
  subheaderless: !hasSubHeader.value
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
      <span class="subsubheader">{{ content.subheader }}</span>
    </p>
  </a>
</template>

<style scoped>
.card {
  /* 12vw 48vw 4vw medium */
  /* 0 72vw 8vw small */
  display: grid;
  grid-template-columns: 1fr;
  width: 60vw;
  height: 60vw;
  box-shadow:
    0.2vw 0.2vw 0.1vw #111,
    -0.1vw -0.1vw 0.1vw #111;
  margin: 0;
  background: #424242;
  color: #7cb342;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: #000;
  }

  /* 0, 1, 4, 5 */
  &:nth-of-type(4n),
  &:nth-of-type(4n + 1) {
    clip-path: polygon(0% 86.6%, 100% 86.6%, 50% 0);
    grid-template-rows: 21.96vw 18vw 12vw;
    padding: 0;

    .img-holder {
      grid-row: 1 / 2;

      img {
        top: 75%;
      }
    }

    h4 {
      grid-row: 3 / 4;
      margin: 1vw 0 2vw;
    }

    .subheader .date {
      grid-row: 1 / 2;
    }
  }

  /* 2, 3, 6, 7 */
  &:nth-of-type(4n-2),
  &:nth-of-type(4n-1) {
    clip-path: polygon(0% 0%, 100% 0%, 50% 86.6%);
    grid-template-rows: 12vw 18vw 21.96vw;
    padding: 0;

    .img-holder {
      grid-row: 3 / 4;

      img {
        top: 25%;
      }
    }

    h4 {
      grid-row: 1 / 2;
      margin: 2vw 0 1vw;
    }

    .subheader .date {
      grid-row: 2 / 3;
    }
  }

  &:nth-of-type(2n-1) {
    margin-left: 0;
    margin-right: -10vw;
  }

  &:nth-of-type(2n) {
    margin-left: -10vw;
    margin-right: 0;
  }

  h4,
  p {
    font-size: 3vw;
    line-height: 3vw;

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

  p {
    margin: 0;

    .date {
      font-family: 'Ubuntu+Mono', monospace;
      border: 0.2vw solid rgba(255, 255, 255, 0.4);
      padding: 0 0.25vw;
      margin-right: 0.5vw;

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

.subheaderless .subheader {
  display: block;
  margin: calc(7vw - 0.5vw) 0;
}

.img-holder {
  grid-row: 1 / 3;
  position: relative;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0.2vw 0.2vw 0.4vw #7f7f7f) drop-shadow(-0.2vw 0.2vw 0.4vw #7f7f7f);
  }
}

.light {
  box-shadow:
    0.2vw 0.2vw 0.1vw #bdbdbd,
    -0.1vw -0.1vw 0.1vw #bdbdbd;
  background: #e8e8e8;

  &:hover {
    background: #fff;
  }

  p {
    .date {
      border: 0.2vw solid rgba(0, 0, 0, 0.4);
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

@media (max-width: 719px) {
  .img-holder img {
    max-width: 7vw;
    max-height: 7vw;
  }

  .card {
    &:nth-of-type(2n-1) {
      margin-right: -12vw;
    }

    &:nth-of-type(2n) {
      margin-left: -12vw;
    }
  }
}

@media (min-width: 720px) {
  .img-holder img {
    max-width: 5vw;
    max-height: 5vw;
  }
}

@media (min-width: 720px) and (max-width: 1023px) {
  .card {
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

    h4,
    p {
      font-size: 2vw;
      line-height: 2vw;
    }
  }
}

@media (min-width: 1024px) {
  .card {
    /* 12vw 48vw 4vw medium */
    /* 0 60vw 10vw small */
    width: 30vw;
    height: 30vw;

    /* 2, 4, 6, 8 */
    &:nth-of-type(2n) {
      grid-template-rows: 5vw 10vw 10.98vw;
      clip-path: polygon(0% 0%, 100% 0%, 50% 86.6%);

      .img-holder {
        grid-row: 3 / 4;

        img {
          top: 25% !important;
        }
      }

      h4 {
        grid-row: 1 / 2;
        margin: 2vw 0 1vw;
      }

      .subheader {
        grid-row: 2 / 3;

        .date {
          grid-row: 2 / 3;
        }
      }
    }

    /* 1, 3, 5, 7 */
    &:nth-of-type(2n + 1) {
      grid-template-rows: 10.98vw 10vw 5vw;
      clip-path: polygon(0% 86.6%, 100% 86.6%, 50% 0);

      .img-holder {
        grid-row: 1 / 2;
      }

      h4 {
        grid-row: 3 / 4;
        margin: 1vw 0 2vw;
      }

      .subheader {
        grid-row: 2 / 3;

        .date {
          grid-row: 1 / 2;
        }
      }

      .img-holder img {
        top: 75% !important;
      }
    }

    /* 2, 5 ,8 */
    &:nth-of-type(3n + 2) {
      margin-left: -5vw;
      margin-right: -5vw;
    }

    /* 1, 7 */
    /* 3 */
    /* 5 */
    &:nth-of-type(6n-5),
    &:nth-of-type(6n-3),
    &:nth-of-type(6n-1) {
      margin-top: 4.03vw;
    }

    /* 2, 8 */
    /* 4 */
    /* 6 */
    &:nth-of-type(6n-4),
    &:nth-of-type(6n-2),
    &:nth-of-type(6n) {
      margin-top: 0.98vw;
    }

    /* 1, 7 */
    &:nth-of-type(3n + 1) {
      margin-left: 15vw;
      margin-right: -5vw;
    }

    /* 3, 6 */
    &:nth-of-type(3n) {
      margin-right: 15vw;
      margin-left: -5vw;
    }

    h4,
    p {
      font-size: 1.4vw;
      line-height: 1.4vw;
    }
  }
}
</style>
