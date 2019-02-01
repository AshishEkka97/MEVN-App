import Api from '@/services/Api'

export default {
  index ()  {
    return Api().get('plants')
  },

  post (plantdata) {
    return Api().post('plants', plantdata)
  },

  get (plantId) {
    return Api().get('plants', plantId)
  },

  put (plantId, plantdata) {
    console.log(plantId)
    return Api().put(`plants/${plantId}`, plantdata)
  },

  delete (plantId) {
    return Api().delete(`plants/${plantId}`)
  }

}