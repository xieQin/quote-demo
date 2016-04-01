import {
  SUCCESS_GET_GROUPS,
  FAILURE_GET_GROUPS
} from '../types'
import filters from '../../utils/fliters.js'

const state = {
  groups: []
}

const mutations = {
  [FAILURE_GET_GROUPS] (state) {
    state.groups = []
  },
  [SUCCESS_GET_GROUPS] (state, action) {
    state.groups = filters.filterGroup(action.groups)
  }
}

export default {
  state,
  mutations
}
