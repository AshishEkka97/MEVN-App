import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import * as Cookie from 'js-cookie'

Vue.use(Vuex);



export default new Vuex.Store({
	strict: true,
	state:{
		token: null,
		user: {},
		isAdmin: false,
		isUserLoggedIn: false,
		layout: 'front-layout'
	},
	mutations: {
		SET_LAYOUT (state, payload) {
state.layout = payload
},
		setToken(state, token){
			state.token = token
			if(token){
				state.isUserLoggedIn =true
			}
			else
			{
				state.isUserLoggedIn = false
			}
		},

		setUser(state, user){
			state.user = user
		}

	},
	actions: {
		setToken ({commit},token){
			commit('setToken',token)
		},
		setUser ({commit}, user){
			commit('setUser', user)
		}

	},

	 getters: {
layout (state) {
return state.layout
}
},

    plugins: [
         createPersistedState({
             paths: ['token', 'isUserLoggedIn','layout','user'],
             getState: (key) => Cookie.getJSON(key), 
             setState: (key, state) => Cookie.set(key, state, { expires: 5, secure: false }),
             removeItem: key => Cookies.remove(key)
         })
      ]

})

