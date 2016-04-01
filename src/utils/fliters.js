export default {
  filterQuote: (items) => {
    const quote = []
    var item = items.split('$$')
    for (var i = 0; i < item.length; i++) {
      var tmp = item[i].split(',')
      tmp[10] = parseFloat((tmp[9] - tmp[7]).toFixed(3, 10))
      tmp[11] = parseFloat(((tmp[10] / tmp[7]) * 100).toFixed(2, 10))
      var style = ''
      if (tmp[10] > 0) {
        style = 'up'
      }
      if (tmp[10] < 0) {
        style = 'down'
      }
      var lastquote = JSON.parse(window.localStorage.getItem('_quotes_tid_' + tmp[0]))
      var update = ''
      if (lastquote && tmp[8] !== lastquote.time) {
        update = 'update'
      }
      var status = ''
      if (lastquote && tmp[10] > lastquote.new) {
        status = 'up'
      }
      if (lastquote && tmp[10] < lastquote.new) {
        status = 'down'
      }
      quote[i] = {
        tid: tmp[0],
        name: tmp[1],
        buy: tmp[2],
        sell: tmp[3],
        current: tmp[4],
        start: tmp[5],
        high: tmp[6],
        low: tmp[7],
        time: tmp[8],
        end: tmp[9],
        new: tmp[10],
        range: tmp[10],
        percent: tmp[11],
        style: style,
        update: update,
        status: status
      }
      window.localStorage.setItem('_quotes_tid_' + tmp[0], JSON.stringify(quote[i]))
    }
    return quote
  },
  filterGroup: items => {
    const group = []
    for (var i = 0; i < items.length; i++) {
      var tids = ''
      for (var j = 0; j < items[i].items.length; j++) {
        tids += items[i].items[j].tid + ','
      }
      tids = tids.substr(0, tids.lastIndexOf(','))
      var tmp = {
        exchange: items[i].exchange,
        gid: items[i].gid,
        name: items[i].name,
        items: items[i].items,
        tids: tids
      }
      group[i] = tmp
    }
    return group
  }
}
