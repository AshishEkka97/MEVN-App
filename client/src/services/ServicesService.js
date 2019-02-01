import Api from '@/services/Api'

export default {
  index ()  {
    return Api().get('services')
  },

  post (servicedata) {
    return Api().post('services', servicedata)
  },

  get (serviceId) {
    return Api().get('services', serviceId)
  },

  put (serviceId, servicedata) {
    console.log(serviceId)
    return Api().put(`services/${serviceId}`, servicedata)
  },

  delete (serviceId) {
    return Api().delete(`services/${serviceId}`)
  },

  seen (serviceId) {
    return Api().put(`services/${serviceId}`, {isViewed: true})
  }

}