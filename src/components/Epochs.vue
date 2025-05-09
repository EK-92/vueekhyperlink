<script setup lang="ts">
import { ref } from 'vue'
import Epoch from '@/components/Epoch.vue'

import SheridanPic from '@/assets/sheridan.webp'
import TSLPic from '@/assets/tsl.svg'
import CICPic from '@/assets/cic.webp'
import CICShadedPic from '@/assets/cicShaded.webp'
import EmeritusPic from '@/assets/emeritus.webp'
import RewardopsPic from '@/assets/rewardops.webp'
import OpenPic from '@/assets/open.webp'

const cards = ref([
  {
    header: 'Sheridan College',
    subheader: 'Ontario College Diploma',
    link: 'https://www.sheridancollege.ca/programs/computer-systems-technician-software-engineering',
    date: '2014-2016',
    pic: SheridanPic
  },
  {
    header: 'The Silverlogic',
    subheader: 'Front-end development',
    link: 'https://tsl.io/',
    date: '2016-2017',
    pic: TSLPic
  },
  {
    header: 'Emeritus Financial Strategies',
    subheader: 'Front-end development',
    link: 'http://emeritusfinancial.com/',
    date: '2017-2018',
    pic: EmeritusPic
  },
  {
    header: 'RewardOps',
    subheader: 'Front-end development',
    link: 'https://rewardops.com/',
    date: '2018-2021',
    pic: RewardopsPic
  },
  {
    header: 'RewardOps',
    subheader: 'Site Reliability Engineer',
    link: 'https://rewardops.com/',
    date: '2021-2023',
    pic: RewardopsPic
  },
  {
    header: 'Permanent Resident of Canada',
    subheader: '',
    date: '2022-current',
    link: '',
    pic: CICPic
  },
  {
    header: 'Your Company',
    subheader: 'My Future Job',
    link: '',
    date: 'Soon',
    pic: OpenPic
  },
  {
    header: '...',
    subheader: '...',
    link: '',
    date: '...',
    pic: CICShadedPic
  }
])
</script>

<template>
  <div class="cards-holder">
    <Epoch v-for="(card, i) in cards" :content="card" :key="i"></Epoch>
  </div>
</template>

<style scoped>
.cards-holder {
  display: grid;
  margin-top: 4.03vw;
}

@media (max-width: 1023px) {
  .cards-holder {
    margin-top: 5vw;
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .cards-holder {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
