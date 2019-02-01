<template>
  <div>
    <h2>Orders</h2>

    <v-dialog v-model="dialog" max-width="500px">

      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>

            <h3>Rocks</h3>
            <v-container fluid grid-list-xs>
              <v-layout row wrap>
                <v-flex
                  v-for="rock in Items.rocks"
                  :key="rock.id"
                  xs4
                >
                  <v-card hover>
                    <v-card-media :src="'/static/public/uploads/' + rock.imageUrl" height="75">
                    </v-card-media>
                    {{rock.name}}
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>

            <h3>Plants</h3>
            <v-container fluid grid-list-xs>
              <v-layout row wrap>
                <v-flex
                  v-for="plant in Items.plants"
                  :key="plant.id"
                  xs4
                >
                  <v-card hover>
                    <v-card-media :src="'/static/public/uploads/' + plant.imageUrl" height="75">
                    </v-card-media>
                    {{plant.name}}
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>

            <h3>Fishes</h3>
            <v-container fluid grid-list-xs>
              <v-layout row wrap>
                <v-flex
                  v-for="fish in Items.fishes"
                  :key="fish.id"
                  xs4
                >
                  <v-card hover>
                    <v-card-media :src="'/static/public/uploads/' + fish.imageUrl" height="75">
                    </v-card-media>
                    {{fish.name}}
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
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
      :items="orders"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.UserId }}</td>
        <td>{{ props.item.address }}</td>
        <td>{{ props.item.city }}</td>
        <td>{{ props.item.pincode }}</td>
        <td>{{ props.item.updatedAt }}</td>

        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="viewItem(props.item.id)">
            <v-icon color="teal">visibility</v-icon>
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
import OrdersService from '../../services/OrdersService'
import RocksService from '../../services/RocksService'
import PlantsService from '../../services/PlantsService'
import FishesService from '../../services/FishesService'

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
        text: 'Order Id',
        align: 'left',
        sortable: true,
        value: 'id'
      },
      { text: 'Ordered By', value: 'user' },
      { text: 'Address', value: 'address' },
      { text: 'City', value: 'city' },
      { text: 'Pin Code', value: 'pincode' },
      { text: 'Ordered On', value: 'updatedAt' },

      { text: 'Actions', value: 'name', sortable: false }
    ],
    orders: [],
    editedIndex: -1,

    Items: {
      rocks: [],
      plants: [],
      fishes: []
    }
  }),

  computed: {
    formTitle () {
      return 'View Ordered Items'
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
      const orders = await OrdersService.index()
      this.orders = orders.data
      console.log(this.orders)
      //this.Items.rocks.push(orders.data.rocks)
    },

    async viewItem (id) {
      await OrdersService.seen(id)
      const orderDetails = await OrdersService.get(id)
      console.log(orderDetails.data.rocks)
      this.Items = Object.assign({}, orderDetails.data)
      this.dialog = true
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