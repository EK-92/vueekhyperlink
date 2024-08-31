<script setup lang="ts">
import { ref } from 'vue'
import Epoch from './Epoch.vue'

const cards = ref([
  {
    header: 'Graduated from Sheridan College',
    subheader: 'Ontario College Diploma',
    link: 'https://www.sheridancollege.ca/programs/computer-systems-technician-software-engineering',
    date: '2016',
    pic: '/src/assets/sheridan.png'
  },
  {
    header: 'Internship @ The Silverlogic',
    subheader: 'Front-end development',
    link: 'https://tsl.io/',
    date: '2016-2017',
    pic: '/src/assets/tsl.svg'
  },
  {
    header: 'Eligible to work in Canada',
    date: '2016-current',
    link: '#',
    pic: '/src/assets/cic.png'
  },
  {
    header: 'Employment @ Emeritus Financial',
    subheader: 'Front-end development',
    link: 'http://emeritusfinancial.com/',
    date: '2017-2018',
    pic: '/src/assets/emeritus.png'
  },
  {
    header: 'Employment @ RewardOps',
    subheader: 'Front-end development',
    link: 'https://rewardops.com/',
    date: '2018-2021',
    pic: '/src/assets/rewardops.png'
  },
  {
    header: 'Employment @ RewardOps',
    subheader: 'SRE',
    link: 'https://rewardops.com/',
    date: '2021-2023',
    pic: '/src/assets/rewardops.png'
  },
  {
    header: 'Permanent Resident of Canada',
    date: '2022-current',
    link: '#',
    pic: '/src/assets/cic.png'
  },
  {
    header: '...',
    subheader: '...',
    link: '#',
    date: '...',
    pic: '/src/assets/cicShaded.png'
  }
])
</script>

<template>
  <div class="cards-holder">
    <Epoch v-for="card in cards" :content="card" :key="card.header"> </Epoch>
  </div>
</template>

<style scoped></style>
