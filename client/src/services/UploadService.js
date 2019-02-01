import Api from '@/services/Api'

export default {

  post (fileData) {
    return Api().post('upload', fileData)
  }
}