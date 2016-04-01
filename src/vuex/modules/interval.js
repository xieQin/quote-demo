import {
  OFF_INTERVAL,
  LOADING_QUOTE,
  LOADED_QUOTE
} from '../types'

const state = {
  interval: -1,
  loading: true
}

const mutations = {
  [LOADING_QUOTE] (state) {
    state.loading = false
  },
  [LOADED_QUOTE] (state) {
    state.loading = true
  },
  [OFF_INTERVAL] (state, action) {
    clearInterval(state.interval)
    state.interval = action
  }
}

export default {
  state,
  mutations
}
