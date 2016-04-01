<template>
  <div>
    <sync-loader class="loading" :loading="loading" :color="color" :size="size" v-show="!status"></sync-loader>
    <Group v-show="status" :groups="group"></Group>
  </div>
</template>

<script>
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'
import Group from './group.vue'
import { getGroups } from '../../../vuex/actions'
import { getGroupsData, getLoadingStatus } from '../../../vuex/getters'

export default {
  components: { Group, SyncLoader },
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
