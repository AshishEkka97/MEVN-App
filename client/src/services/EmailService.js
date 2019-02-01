import Api from '@/services/Api'

export default {

  post (uId) {
    return Api().post(`send/${uId}`)
  },
}