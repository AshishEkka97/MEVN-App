<template>

  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
    <h2 style="margin-bottom:20px;margin-top:10px; color:grey;">Notifications</h2>
      <v-card>
        
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :inset="item.inset"
              :key="index"
            ></v-divider>


            <v-list-tile
              v-else
              :key="item.title"
              avatar
              @click="route(item.link)"
            >
              <v-list-tile-avatar>
                <v-icon>
                  {{item.icon}}
                </v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

          </template>
        </v-list>
      </v-card>
      <br>
      <v-card flat class="grey lighten-5" height="50px"></v-card>
    </v-flex>

  </v-layout>
</template>


<script>
  import NotificationService from '../../services/NotificationService'
  export default {

    beforeMount:function(){

   if(this.$store.state.isUserLoggedIn && this.$store.state.user.isAdmin){
     
   }else
    {
      this.$store.commit('SET_LAYOUT','login-layout')
      this.$router.push('/login')
    }
    },

    data () {

      return {
        items: [
          { header: 'There are 0 new updates for you' },
          {
            icon: 'shopping_cart',
            title: 'Orders',
            subtitle: "You have 0 new orders",
            link: "/adminorder"
          },
          { divider: true, inset: true },
          {
            icon: 'question_answer',
            title: 'Queries',
            subtitle: "You have 0 new queries",
            link: "/adminquery"
          },
          { divider: true, inset: true },
          {
            icon: 'contact_mail',
            title: 'Services',
            subtitle: "You have 0 new service orders",
            link: "/adminservice"
          }
        ]
      }
    },

    created () {
      this.initialize()
    },

    methods: {

      route(link)
      {
        this.$router.push(link)
      },
      async initialize () {
        const updates = await NotificationService.index()
        console.log(updates.data)
        this.items[0].header = "There are " + updates.data.total + " new updates for you"
        this.items[1].subtitle = "You have " + updates.data.newOrders + " new orders"
        this.items[3].subtitle = "You have " + updates.data.newQueries + " new queries"
        this.items[5].subtitle = "You have " + updates.data.newServices + " new service orders"
      }
    }
  }
</script>
