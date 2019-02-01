
<template>
  <div>
    <h2>Services</h2>
    <v-dialog v-model="dialog" max-width="500px">
      
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>


            <v-card-text> 
           <b>Service Area: </b>{{editedItem.area}}
            </v-card-text>

            <v-card-text> 
           <b>Installation Date: </b>{{editedItem.date}}
            </v-card-text>

            <v-card-text> 
           <b>Address: </b>{{editedItem.address}}
            </v-card-text>

            <v-card-text> 
           <b>City: </b>{{editedItem.city}}
            </v-card-text>

            <v-card-text> 
           <b>Pin Code: </b>{{editedItem.pincode}}
            </v-card-text>

            <v-card-text> 
           <b>Maintainance (Time slots in months): </b>{{editedItem.timeSlot}}
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
      :items="services"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td >{{ props.item.area }}</td>
        <td >{{ props.item.date }}</td>
        <td >{{ props.item.pincode }}</td>
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
  import ServicesService from '../../services/ServicesService'
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
          text: 'Service Id',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Service Area', value: 'area' },
        { text: 'Date', value: 'date' },
        { text: 'Pin Code', value: 'pincode' },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      services: [],
      editedIndex: -1,
      arrayIndex: -1,
      editedItem: {
        area: '',
        date: '',
        address: '',
        city: '',
        pincode: '',
        maintainenceRequired: '',
        timeSlot: ''



      },
      defaultItem: {
            area: '',
        date: '',
        address: '',
        city: '',
        pincode: '',
        maintainenceRequired: '',
        timeSlot: ''
      }
    }),

    computed: {
      formTitle () {
        return 'View Service'
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
        const services = await ServicesService.index()
        console.log(services.data)
        this.services = services.data
      },

      async viewItem (item) {
        await ServicesService.seen(item.id)
        this.editedIndex = item.id
        this.arrayIndex = this.services.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      async deleteItem (item) {
        const sindex = this.services.indexOf(item)
        var flag = null
        confirm('Are you sure you want to delete this item?') && (flag = await ServicesService.delete(item.id))
        console.log(flag)
        if(flag) {
          this.services.splice(sindex, 1)
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