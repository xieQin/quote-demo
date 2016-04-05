<template>
  <div class="show-grid">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <div class="row">
      <div class="col-xs-12 col-md-8">me</div>
      <div class="col-xs-6 col-md-4">me</div>
    </div>
  </div>
  <input type="text" v-model="data1">
  <input type="text" v-model="data2">
  <input type="text" v-model="data3">
  <div class="chart">
    
  </div>
</template>

<script>
import chart from '../../utils/chart'
export default {
  data () {
    return {
      chart: [4, 8, 15, 16, 23, 42],
      data1: 11,
      data2: 2,
      data3: 3
    }
  },
  computed: {
    chartdata () {
      return [this.data1 - 0, this.data2 - 0, this.data3 - 0]
    }
  },
  watch: {
    'chartdata' () {
      chart.chart('.chart', this.chartdata, 'div')
    }
  },
  ready () {
    // var chart = d3.select('.chart')
    // chart.html('Hello wolrd!')
    chart.chart('.chart', this.chartdata, 'div')
  }
}
</script>

<style>
.chart div {
  font: 10px sans-serif;
  background-color: steelblue;
  text-align: right;
  padding: 3px;
  margin: 1px;
  color: white;
}
</style>

