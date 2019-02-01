<template>
  <v-app id="app"  v-if="$store.state.isUserLoggedIn">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      width=230
      app
    >
      <v-toolbar  flat class="transparent" color="blue" dark>
        <v-list class="pa-0 blue">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title style="font-size:14px;">{{username}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list dense>

        <router-link to="/adminhome">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>people</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grr--text">Users</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        

        
        <router-link to="/adminrock">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>terrain</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grr--text">Rocks</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        
        <router-link to="/adminfish">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>pool</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grr--text">Fishes</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        
        <router-link to="/adminplant">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>local_florist</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grr--text">Plants</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>

                <router-link to="/adminorder">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>shopping_cart</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grr--text">Orders</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>

                <router-link to="/adminservice">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grr--text">Services</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        
        <router-link to="/adminquery">
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon>question_answer</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grr--text">Queries</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        

      </v-list>
    </v-navigation-drawer>


    <v-toolbar  color="blue" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="h1">Wooscape</v-toolbar-title>

       <v-spacer></v-spacer>

<div>

<router-link to="/adminnotification">
<v-badge overlap class="bell">
<span v-if="!isHidden" slot="badge">{{totalcount}}</span>

<v-avatar
color="blue"
size="30"
>
<v-icon dark class="bell_icon"  @click="isHidden = true">notifications</v-icon>
</v-avatar>
</v-badge >
</router-link>


      <button  @click="logout" white class="logout_btn" style="">
      Logout
      </button>
</div>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>





<v-footer
dark
fixed
color="blue"
height="auto"
>
<v-card
class="flex blue"
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

 import NotificationService from '../services/NotificationService'

  export default {
  computed: {

  },
  methods:{
  logout()
  {
  this.$store.dispatch('setToken',null)
  this.$store.dispatch('setUser',null)
  this.$store.commit('SET_LAYOUT','login-layout')
  this.$router.push('/login')
  },

        async initialize () {
        const updates = await NotificationService.index()
        this.totalcount=updates.data.total
        if(!this.totalcount) this.isHidden = true
      }
  },


    created () {
      this.initialize()
    },

    data () {
      return{
        totalcount:0,
        isHidden: false,
      username:this.$store.state.user.email,  
      drawer: null,
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
  width:75px; height:30px; border:1px solid white; border-radius:15px 15px; margin-right:30px;
  transition:0.4s;
}

@media only screen and (max-width: 786px)
{
.logout_btn
{
  width:52px; height:22px; border:1px solid white; border-radius:15px 15px; margin-right:0px;
  transition:0.4s;
  font-size: 11px;
}
}

.logout_btn:hover
{
  color:#cccccc;
  border:1px solid #cccccc;
}

.bell
{
  margin-right:25px; cursor: pointer;
}

@media only screen and (max-width: 786px)
{
 .bell
{
  margin-right:15px; cursor: pointer;
} 
.h1
{
  display: none;
}

}
</style>