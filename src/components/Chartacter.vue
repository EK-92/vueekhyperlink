  <script lang="ts">
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'
  import { Bar } from 'vue-chartjs'

  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

  export default {
    name: 'Chartacter',
    components: {
      Bar
    },
    data() {
      return {
        data: {
          labels: ['Luck', 'Intuition', 'Intellect', 'Persistence', 'Energy', 'Resourcefulness', 'Hugs'],
          datasets: [{
            label: 'of 10',
            data: [8, 7, 6, 9, 8, 10, 1],
            backgroundColor: '#7cb342'
          }]
        },
        options: {
          responsive: true,
          indexAxis: 'y',
        }
      }
    }
  }
</script>

<template>
  <Bar :data="data" :options="options" />
</template>
