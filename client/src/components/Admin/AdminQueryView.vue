
<template>
  <div>
    <h2>Queries</h2>
    <v-dialog v-model="dialog" max-width="500px">
      
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
 

            <v-card-text> 
           {{editedItem.desc}}
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
      :items="queries"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td >{{ props.item.email }}</td>
        <td >{{ props.item.contact }}</td>
      
        <td class="justify-start layout px-0">
          <v-btn icon class="mx-0" @click="viewItem(props.item)">
            <v-icon color="teal">visibility</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon color="pink">delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Refresh</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import QueryService from '../../services/QueryService'
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
          text: 'Query Id',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Email', value: 'email' },
        { text: 'Contact', value: 'contact' },
        
        { text: 'Actions', value: 'name', sortable: false }
      ],
      queries: [],
      editedIndex: -1,
      arrayIndex: -1,
      editedItem: {
        email: '',
        contact: '',
        desc: ''

      },
      defaultItem: {
        email: '',
        contact: '',
        desc: ''
        }
    }),

    computed: {
      formTitle () {
        return 'View Query'
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
        const queries = await QueryService.index()
        console.log(queries.data)
        this.queries = queries.data
      },

      async viewItem (item) {
        await QueryService.seen(item.id)
        this.editedIndex = item.id
        this.arrayIndex = this.queries.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      async deleteItem (item) {
        const sindex = this.queries.indexOf(item)
        var flag = null
        confirm('Are you sure you want to delete this item?') && (flag = await QueryService.delete(item.id))
        console.log(flag)
        if(flag) {
          this.queries.splice(sindex, 1)
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