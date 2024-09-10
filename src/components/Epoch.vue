<script setup lang="ts">
defineProps(['content'])
</script>

<template>
  <a :href=content.link class="card" target="blank">
    <div class="img-holder">
      <img :src=content.pic :alt=content.header />
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
  box-shadow: 2px 2px 2px #111, -1px -1px 1px #111;
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
      font-family: "Ubuntu+Mono", monospace;
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

.img-holder {
  grid-row: 1 / 3;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0.1vw 0.1vw 0.2vw #7f7f7f)
      drop-shadow(-0.1vw 0.1vw 0.2vw #7f7f7f);
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

.clickable {
  cursor: pointer;
}

.card:not(.clickable) {
  cursor: default;
}

@media (max-width: 639px) {
  .img-holder img {
    max-width: 7vw;
    max-height: 7vw;
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
}
</style>
