<template>
  <v-container fluid>
    <radar-chart :chart-data="chartData" :options="chartOptions" />
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      chartDataValues: [4, 2, 4, 4, 4],
      chartLabels: ['外交性', '神経質傾向', '誠実性', '調和性', '開放性'],
      chartOptions: {
        title: {
          display: true,
          text: '診断結果',
          fontSize: 24
        },
        scale: {
          ticks: {
            display: false
          }
        },
        maintainAspectRatio: false,
        animation: {
          duration: 1500,
          easing: 'easeInOutCubic'
        }
      }
    }
  },
  computed: {
    chartData () {
      return {
        datasets: [
          {
            label: '診断結果',
            data: this.chartDataValues
          }
        ],
        labels: this.chartLabels
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
