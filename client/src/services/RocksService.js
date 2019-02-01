import Api from '@/services/Api'

export default {
  index ()  {
    return Api().get('rocks')
  },

  post (rockdata) {
    return Api().post('rocks', rockdata)
  },

  get (rockId) {
    return Api().get('rocks', rockId)
  },

  put (rockId, rockdata) {
    console.log(rockId)
    return Api().put(`rocks/${rockId}`, rockdata)
  },

  delete (rockId) {
    return Api().delete(`rocks/${rockId}`)
  }

}