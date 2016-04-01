<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>名称</th>
          <th>gid</th>
          <th>exchange</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in groups.groups" @click="gotoGroup(item.tids)">
          <th scope="row">{{ $index + 1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.gid }}</td>
          <td>{{ item.exchange }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from '../../../vuex/store'
export default {
  store,
  props: ['groups'],
  methods: {
    gotoGroup (tids) {
      store.router.go({ path: '/home/quote?tids=' + tids })
    }
  }
}
</script>
