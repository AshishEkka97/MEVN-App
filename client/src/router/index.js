import Vue from 'vue'
import Router from 'vue-router'

import RegistrationView from '@/components/Login/RegistrationView'
import LoginView from '@/components/Login/LoginView'
import ForgotView from '@/components/Login/ForgotView'
import ResetpassView from '@/components/Login/ResetpassView'
import IndexView from '@/components/Login/IndexView'

import AdminHomeView from '@/components/Admin/AdminHomeView'
import AdminRockView from '@/components/Admin/AdminRockView'
import AdminFishView from '@/components/Admin/AdminFishView'
import AdminPlantView from '@/components/Admin/AdminPlantView'
import AdminFoodView from '@/components/Admin/AdminFoodView'
import AdminOrderView from '@/components/Admin/AdminOrderView'
import AdminQueryView from '@/components/Admin/AdminQueryView'
import AdminServiceView from '@/components/Admin/AdminServiceView'
import AdminNotificationView from '@/components/Admin/AdminNotificationView'

import UserView from '@/components/User/UserView'
import ChoiceView from '@/components/User/ChoiceView'
import QueryView from '@/components/User/QueryView'
import ServiceView from '@/components/User/ServiceView'
import EditProfileView from '@/components/User/EditProfileView'


Vue.use(Router)

export default new Router({
  routes: [
      {
      path: '/',
      name: 'indexview',
      component: IndexView
    },
    {
      path: '/register',
      name: 'registrationview',
      component: RegistrationView
    },
    {
      path: '/login',
      name: 'loginview',
      component: LoginView
    },
    {
      path: '/reset',
      name: 'resetpassview',
      component: ResetpassView
    },
    {
      path: '/forgot',
      name: 'forgotview',
      component: ForgotView
    },

    
    {
      path: '/adminhome',
      name: 'adminhomeview',
      component: AdminHomeView
    },

    {
      path: '/adminrock',
      name: 'adminrockview',
      component: AdminRockView
    },
    {
      path: '/adminfish',
      name: 'adminfishview',
      component: AdminFishView
    },
    {
      path: '/adminplant',
      name: 'adminplantview',
      component: AdminPlantView
    },
    {
      path: '/adminfood',
      name: 'adminfoodview',
      component: AdminFoodView
    },
    {
      path: '/adminorder',
      name: 'adminorderview',
      component: AdminOrderView
    },
    {
      path: '/adminquery',
      name: 'adminqueryview',
      component: AdminQueryView
    },
    {
      path: '/adminservice',
      name: 'adminserviceview',
      component: AdminServiceView
    },
    {
      path: '/adminnotification',
      name: 'adminnotificationview',
      component: AdminNotificationView
    },


    {
      path: '/user',
      name: 'userview',
      component: UserView
    },
    {
      path: '/choice',
      name: 'choiceview',
      component: ChoiceView
    },
    {
      path: '/query',
      name: 'queryview',
      component: QueryView
    },
    {
      path: '/service',
      name: 'serviceview',
      component: ServiceView
    },
    {
      path: '/editprofile',
      name: 'editprofileview',
      component: EditProfileView
    }
  ],
  mode: 'history'
})
