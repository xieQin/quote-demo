import d3 from 'd3'

export default {
  chart: (selection, data, chartItem) => {
    d3.selectAll(selection + ' ' + chartItem).remove()
    d3.select(selection)
        .selectAll(chartItem)
        .data(data)
        .enter().append(chartItem)
        .style('width', (d) => d * 10 + 'px')
        .text((d) => d)
  }
}
