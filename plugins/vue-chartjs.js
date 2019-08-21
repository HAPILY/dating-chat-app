import Vue from 'vue'
import { Radar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

Vue.component('radar-chart', {
  extends: Radar,
  mixins: [reactiveProp],
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
})
