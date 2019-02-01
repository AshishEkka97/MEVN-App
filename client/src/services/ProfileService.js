import Api from '@/services/Api'

export default {
  index ()  {
    return Api().get('users')
  },

  get (userId) {
    return Api().get(`users/${userId}`)
  },

  put (userId, userData) {
    console.log(userId)
    return Api().put(`users/${userId}`, userData)
  },

  delete (userId) {
    return Api().delete(`users/${userId}`)
  }

}
