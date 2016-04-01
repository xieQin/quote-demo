<template>
  <div class="tids">
    <div class="exchange-tid-list" v-for="items in groups.groups">
      <button type="button" @click="gotoGroup(items.tids)" class="btn btn-success">{{ items.name }}</button>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>名称</th>
            <th>tid</th>
            <th>交易所</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items.items" @click="gotoQuote(item.tid)">
            <th scope="row">{{ $index + 1 }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.tid }}</td>
            <td>{{ items.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import store from '../../../vuex/store'
export default {
  store,
  props: ['groups'],
  methods: {
    gotoQuote (tids) {
      store.router.go({ path: '/home/quote?tids=' + tids })
    },
    gotoGroup (tids) {
      store.router.go({ path: '/home/quote?tids=' + tids })
    }
  }
}
</script>

<style>
.exchange-tid-list > .btn {
  margin-left: 20px;
  margin-top: 5px;
}
</style>
