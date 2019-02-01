// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { sync } from 'vuex-router-sync'
import store from '@/store/store'

sync(store, router)

import {
  Vuetify,
 VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VCarousel,
    VDialog,
    VCard,
    VSelect,
    VTextField,
    VDataTable,
    VStepper,
    VDivider,
    VParallax,
    VDatePicker,
    VMenu,
    VBadge,
    VAvatar,
    VSnackbar,
    VSubheader,
    VForm,
    VCheckbox,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VDataTable,
    VToolbar,
    VCarousel,
    VDialog,
    VCard,
    VSelect,
    VTextField,
    VStepper,
    VDivider,
    VParallax,
    VDatePicker,
    VMenu,
    VBadge,
    VAvatar,
    VSnackbar,
    VSubheader,
    VForm,
    VCheckbox,
    transitions
  },
  theme: {
    primary: '#003366',
    secondary: '#82B1FF',
    grr: '#676767',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
