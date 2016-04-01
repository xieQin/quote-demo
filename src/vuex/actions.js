import * as types from './types'
import api from '../api'

export const getGroups = ({ dispatch }) => {
  dispatch(types.LOADING_QUOTE)
  dispatch(types.OFF_INTERVAL, -1)
  dispatch(types.FAILURE_GET_QUOTES)
  api.getGroups().then(response => {
    dispatch(types.LOADED_QUOTE)
    if (!response.ok) {
      return dispatch(types.FAILURE_GET_GROUPS)
    }
    dispatch(types.SUCCESS_GET_GROUPS, { groups: response.data })
  }, response => {
    dispatch(types.FAILURE_GET_GROUPS)
  })
}

export const getQuotes = ({ dispatch }, tids) => {
  dispatch(types.LOADING_QUOTE)
  var intervalID = setInterval(() => {
    api.getQuotes(tids).then(response => {
      dispatch(types.LOADED_QUOTE)
      if (!response.ok) {
        return dispatch(types.FAILURE_GET_QUOTES)
      }
      dispatch(types.SUCCESS_GET_QUOTES, { quotes: response.data })
    }, response => {
      dispatch(types.FAILURE_GET_QUOTES)
    })
  }, 1000)
  dispatch(types.OFF_INTERVAL, intervalID)
}
