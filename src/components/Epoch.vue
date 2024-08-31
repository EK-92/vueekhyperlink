<script setup lang="ts">
const props = defineProps(['content'])
</script>

<template>
  <a :['href']=content.link target="blank">
    <div class="img-holder">
      <img :['src']=content.pic :['alt']=content.header />
    </div>
    <h4>{{ content.header }}</h4>
    <p class="subheader">
      <span class="date">{{ content.date }}</span>
      <span>{{ content.subheader }}</span>
    </p>
  </a>
</template>

<style scoped></style>
