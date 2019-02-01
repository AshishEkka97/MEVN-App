<template>
  <v-app>
    <component v-bind:is="layout"></component>
  </v-app>
</template>

<script>
import AdminLayout from './layouts/AdminLayout'
import LoginLayout from './layouts/LoginLayout'
import UserLayout from './layouts/UserLayout'
import FrontLayout from './layouts/FrontLayout'

export default {
  computed: {
    layout () {
       return this.$store.getters.layout
      //return 'front-layout'
    }
  },
  components: {
    'admin-layout': AdminLayout,
    'login-layout': LoginLayout,
    'user-layout': UserLayout,
    'front-layout':FrontLayout
    // define as many layouts you want for the application
  }
}
</script>