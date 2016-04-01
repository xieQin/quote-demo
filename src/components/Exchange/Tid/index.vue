<template>
  <div>
    <sync-loader class="loading" :loading="loading" :color="color" :size="size" v-show="!status"></sync-loader>
    <Tid v-show="status" :groups="group"></Tid>
  </div>
</template>

<script>
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'
import Tid from './tid.vue'
import { getGroups } from '../../../vuex/actions'
import { getGroupsData, getLoadingStatus } from '../../../vuex/getters'

export default {
  components: { Tid, SyncLoader },
  vuex: {
    getters: {
      group: getGroupsData,
      status: getLoadingStatus
    },
    actions: {
      getGroups
    }
  },
  route: {
    activate () {
      this.getGroups()
    }
  }
}
</script>
