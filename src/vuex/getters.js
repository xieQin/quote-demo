export function getGroupsData (state) {
  return state.groups
}

export function getQuotesData (state) {
  return state.quotes.quotes
}

export function getLoadingStatus (state) {
  return state.interval.loading
}
