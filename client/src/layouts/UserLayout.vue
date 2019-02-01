<template>
  <v-app id="inspire" v-if="$store.state.isUserLoggedIn">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      temporary
      dark
      class="indigo"
      width=230
    > 
    <v-toolbar flat  >
        <v-list class="indigo">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="static/img/default.jpeg" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title style="font-size:10px;">{{username}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list dense class="indigo">
        <v-list-tile
         v-for="item in menuItems" 
         :key="item.title"
         router
         :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
               {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

     </v-navigation-drawer>

    <v-toolbar color="indigo" dark clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Wooscape</v-toolbar-title>
      <v-spacer></v-spacer>

     
      <button  @click="logout" white class="logout_btn">
      Logout
      </button>
      </v-toolbar>
    </v-toolbar>
  <main>
    <router-view></router-view>
  </main>

<v-footer
dark
fixed
color="indigo"
height="auto"
>
<v-card
class="flex indigo"
flat
tile
>

<v-card-actions class="justify-center">
&copy;2018 — Wooscape, All Rights Reserved
</v-card-actions>
</v-card>
</v-footer>

  </v-app>
</template>

<script>
  export default {

 methods:{
  logout()
  {
  this.$store.dispatch('setToken',null)
  this.$store.dispatch('setUser',null)
  this.$store.isUserLoggedIn=false;
  this.$store.commit('SET_LAYOUT','login-layout')
  this.$router.push('/login')
  }
  },


    data () {
    return{
      drawer: null,
      username:this.$store.state.user.email,
      menuItems: [
          {icon: 'home', title: 'Home', link: '/user'},
          {icon: 'shopping_cart', title: 'Select your choice', link: '/choice'},
          {icon: 'contact_mail', title: 'Services', link: '/service'},
          {icon: 'chat', title: 'Queries', link: '/query'},
          {icon: 'edit', title: 'Edit Profile', link: '/editprofile'}
    ],
 icons: ['fab fa-facebook', 'fab fa-twitter','fab fa-linkedin', 'fab fa-instagram']
    }
    },
    props: {
      source: String
    } 
     
  }
</script>

<style>
a {
  text-decoration: none;
}

.logout_btn
{
  width:80px; height:30px; border:1px solid white; border-radius:15px 15px; margin-right:30px;
  transition:0.4s;
}

@media only screen and (max-width: 786px)
{
.logout_btn
{
  width:60px; height:25px; border:1px solid white; border-radius:15px 15px; margin-right:10px;
  transition:0.4s;
}
}

.logout_btn:hover
{
  color:#cccccc;
  border:1px solid #cccccc;
}
</style>