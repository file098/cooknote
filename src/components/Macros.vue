<template>
  <Pie :data="data" :options="options" />
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip)

const data = {
  labels: ['Carbs', 'Fats', 'Proteins'],
  datasets: [
    {
      backgroundColor: [
        '#FFB3BA', '#FFDFBA', '#FFFFBA'],
      data: [80, 20, 30]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: true
}
</script>

<style scoped lang="scss">
canvas {
  align-self: center;
  max-width: 100px;
  max-height: 100px;
}
</style>