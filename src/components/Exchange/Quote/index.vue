<template>
  <div class="quote" v-show="isTids">
    <clip-loader class="loading" :loading="loading" :color="color" :size="size" v-show="!status"></clip-loader>
    <table class="table" v-show="status">
      <thead>
        <tr>
          <th>类型</th>
          <th>卖出</th>
          <th>买入</th>
          <th>涨跌</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in quotes">
          <th class="td {{ item.update }}" scope="row">{{ item['name'] }}</th>
          <td class="td price {{ item.status }}">{{ item['sell'] }}</td>
          <td class="td price {{ item.status }}">{{ item['buy'] }}</td>
          <td class="td quote {{ item.style }}">{{ item['range'] }}  {{ item['percent'] + "%"}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="notids" v-if="!isTids">
    <button v-link="{ path : '/tid' }" type="button" class="btn btn-danger">请选择行情品种</button>
    <!-- {{ quotes | json }} -->
  </div>
</template>

<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import { getQuotes } from '../../../vuex/actions'
import { getQuotesData, getLoadingStatus } from '../../../vuex/getters'

export default {
  components: { ClipLoader },
  vuex: {
    getters: {
      quotes: getQuotesData,
      status: getLoadingStatus
    },
    actions: {
      getQuotes
    }
  },
  data () {
    return {
      isTids: false
    }
  },
  computed: {
    classStyle () {
      if ((this.quotes[0]['range'] - 0) >= 0) {
        return true
      } else {
        return false
      }
    }
  },
  route: {
    activate () {
      if (this.$route.query.tids === undefined) {

      } else {
        this.isTids = true
        this.getQuotes(decodeURIComponent(this.$route.query.tids))
      }
    }
  }
}
</script>

<style lane="less">
.loading {
  margin-top: 50px;
}
.quote .table > thead > tr > th {
  border-bottom: 0;
}
.quote .table > tbody > tr > th {
  margin-top: 5px;
}
.quote thead tr th, .quote tbody tr .td{
  width: 25%;
  margin-top: 5px;
  text-align: center;
  line-height: 20px;
}
.quote tbody tr .update {
  background-color: #d9edf7;
}
.quote tbody tr td.price.up {
  background-color: #ff4d4d;
  color: #fff;
}
.quote tbody tr td.price.down {
  background-color: #008c23;
  color: #fff;
}
.quote.up {
  color: #ff4d4d;
}
.quote.down {
  color: #008c23;
}
.notids {
  padding-top: 20px;
}
.notids button.btn.btn-danger {
  margin-left: 30px;
}
</style>
