
import Api from '@/services/Api'

export default {
  index ()  {
    return Api().get('queries')
  },

  post (querydata) {
    return Api().post('queries', querydata)
  },

  get (queryId) {
    return Api().get('queries', queryId)
  },

  put (queryId, querydata) {
    console.log(queryId)
    return Api().put(`queries/${queryId}`, querydata)
  },

  delete (queryId) {
    return Api().delete(`queries/${queryId}`)
  },

  seen (queryId) {
    return Api().put(`queries/${queryId}`, {isViewed: true})
  }

}
