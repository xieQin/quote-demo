import {GetGroupsApi, GetQuotesApi} from './resources'

export default {
  getGroups: function (data) {
    return GetGroupsApi.get()
  },
  getQuotes: function (tids) {
    return GetQuotesApi.save('', { 'tids': tids })
  }
}
