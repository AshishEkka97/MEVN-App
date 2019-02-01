import Api from '@/services/Api'

export default {
index () {
return Api().get('users')
},

get (userId) {
return Api().get('users', userId)
},

put (userId, userdata) {
console.log(userId)
return Api().put(`users/${userId}`, userdata)
},

delete (userId) {
return Api().delete(`users/${userId}`)
}

}