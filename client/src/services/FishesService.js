import Api from '@/services/Api'

export default {
  index ()  {
    return Api().get('fishes')
  },

  post (fishdata) {
    return Api().post('fishes', fishdata)
  },

  get (fishId) {
    return Api().get('fishes', fishId)
  },

  put (fishId, fishdata) {
    console.log(fishId)
    return Api().put(`fishes/${fishId}`, fishdata)
  },

  delete (fishId) {
    return Api().delete(`fishes/${fishId}`)
  }

}