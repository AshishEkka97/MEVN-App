import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeView from '@/components/HomeView'
import LoginView from '@/components/LoginView'
import ForgotView from '@/components/ForgotView'
import ResetpassView from '@/components/ResetpassView'
import UserView from '@/components/UserView'
import ChoiceView from '@/components/ChoiceView'
import Query from '@/components/Query'
import Service from '@/components/Service'

import RegistrationView from '@/components/RegistrationView'
import AdminHomeView from '@/components/AdminHomeView'
import AdminFoodView from '@/components/AdminFoodView'
import AdminRockView from '@/components/AdminRockView'
import AdminFishView from '@/components/AdminFishView'
import AdminPlantView from '@/components/AdminPlantView'
import AdminQueryView from '@/components/AdminQueryView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'registrationview',
      component: RegistrationView
    },
    {
      path: '/admin',
      name: 'adminhomeview',
      component: AdminHomeView
    },
    {
      path: '/food',
      name: 'adminfoodview',
      component: AdminFoodView
    },
    {
      path: '/rock',
      name: 'adminrockview',
      component: AdminRockView
    },
    {
      path: '/fish',
      name: 'adminfishview',
      component: AdminFishView
    },
    {
      path: '/plant',
      name: 'adminplantview',
      component: AdminPlantView
    },
    {
      path: '/query',
      name: 'adminqueryview',
      component: AdminQueryView
    },
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/',
      name: 'LoginView',
      component: LoginView
    },
    
    {
      path: '/forgot',
      name: 'ForgotView',
      component: ForgotView
    },
    {
      path: '/reset',
      name: 'ResetpassView',
      component: ResetpassView
    },
    {
     path: '/user',
     name: 'UserView',
     component: UserView
   },

   {
     path: '/choice',
     name: 'ChoiceView',
     component: ChoiceView
   },
   {
     path: '/query',
     name: 'Query',
     component: Query
   },
   {
     path: '/service',
     name: 'Service',
     component: Service
   }

  ]
})
