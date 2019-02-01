import Api from '@/services/Api'

export default {
  index ()  {
    return Api().get('orders')
  },

  post (orderdata) {
    return Api().post('orders', orderdata)
  },

  get (orderId) {
    return Api().get(`orders/${orderId}`)
  },

  seen (orderId) {
    return Api().put(`orders/${orderId}`, {isViewed: true})
  }
}