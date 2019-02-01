
<template>
  <div>
    <h2>Users</h2>
    <v-dialog v-model="dialog" max-width="500px">
      
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>


            <v-card-text> 
             <b>Role: </b> {{editedItem.isAdmin?admin:user}}
            </v-card-text>

            <v-card-text> 
             <b>Email: </b> {{editedItem.email}}
            </v-card-text>

             <v-card-text> 
              <b>Contact No.: </b> {{editedItem.contact}}
            </v-card-text>
              

             <v-card-text> 
              <b>Address: </b> {{editedItem.address}}
            </v-card-text>
              
               <v-card-text> 
              <b>City: </b> {{editedItem.city}}
            </v-card-text>

             <v-card-text> 
              <b>Pin Code: </b> {{editedItem.pincode}}
            </v-card-text>



            <v-card-text> 
              <b>Created At: </b> {{editedItem.createdAt}}
            </v-card-text>


            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Close</v-btn>
          </v-card-actions>
      </v-card>
    </v-dialog>



    <v-data-table
      :headers="headers"
      :items="users"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td >{{ props.item.email }}</td>
        <td >{{ props.item.contact }}</td>
        <td >{{ props.item.city }}</td>
        <td >{{ props.item.isAdmin ?admin:user }}</td>
        <td class="justify-start layout px-0">
          <v-btn icon class="mx-0" @click="viewItem(props.item)">
            <v-icon color="teal">visibility</v-icon>
          </v-btn>

          
            <a v-bind:href="'mailto:' + props.item.email">
            <v-btn icon class="mx-0">
            <v-icon color="grey darken-1">mail</v-icon>
            </v-btn>
            </a>

        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Refresh</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import UsersService from '../../services/UsersService'
  export default {

    beforeMount:function(){

   if(this.$store.state.isUserLoggedIn && this.$store.state.user.isAdmin){
     
   }else
    {
      this.$store.commit('SET_LAYOUT','login-layout')
      this.$router.push('/login')
    }
    },

    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'User Id',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Email', value: 'email' },
        { text: 'Contact', value: 'contact' },
        { text: 'City', value: 'city' },
        { text: 'Role', value: 'isAdmin' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      users: [],
      editedIndex: -1,
      arrayIndex: -1,
      editedItem: {
        email: '',
        contact: '',
        address: '',
        city: '',
        pincode: '',
        createdAt: '',
        isAdmin: ''



      },
      defaultItem: {
        email: '',
        contact: '',
        address: '',
        city: '',
        pincode: '',
        createdAt: '',
        isAdmin:''

      },
      admin:'Admin',
      user: 'User'

    }),

    computed: {
      formTitle () {
        return 'View User'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      async initialize () {
        const users = await UsersService.index()
        console.log(users.data)
        this.users = users.data
      },

      viewItem (item) {
        this.editedIndex = item.id
        this.arrayIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      async deleteItem (item) {
        const sindex = this.users.indexOf(item)
        var flag = null
        confirm('Are you sure you want to delete this item?') && (flag = await UsersService.delete(item.id))
        console.log(flag)
        if(flag) {
          this.users.splice(sindex, 1)
        }
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      }

     
    }
  }
</script>