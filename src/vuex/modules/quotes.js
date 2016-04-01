import {
  SUCCESS_GET_QUOTES,
  FAILURE_GET_QUOTES
} from '../types'
import filters from '../../utils/fliters.js'

const state = {
  quotes: []
}

const mutations = {
  [FAILURE_GET_QUOTES] (state) {
    state.quotes = []
  },
  [SUCCESS_GET_QUOTES] (state, action) {
    let data = filters.filterQuote(action.quotes)
    state.quotes = data
  }
}

export default {
  state,
  mutations
}
