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
          labels: ['Luck', 'Intuition', 'Intellect', 'Persistence', 'Energy', 'Resourcefulness', 'Ambition', 'Patience'],
          datasets: [{
            data: [8, 7, 6, 9, 8, 10, 5, 8],
            backgroundColor: '#7cb342'
          }]
        },
        options: {
          responsive: true,
          indexAxis: 'y',
          scales: {
            y: {
              ticks: { color: '#7cb342', beginAtZero: true }
            },
            x: {
              ticks: { color: '#7cb342', beginAtZero: true }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false
            }
          }
        }
      }
    }
  }
</script>

<template>
  <Bar :data="data" :options="options" />
</template>
