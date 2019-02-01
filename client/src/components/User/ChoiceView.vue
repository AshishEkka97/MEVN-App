<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Select rocks</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 2" step="2">Select plants</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="e1 > 3" step="3">Select fishes</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="4">Delivery Address</v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">
        <v-container >
          <v-layout row wrap>
            <v-flex xs12 sm6 lg3 offset sm-3 v-for="item in rockItems"
              :key="item.id">
              <v-card style="margin-left:10px;">
              <v-card-media
              height="200px"
              v-bind:src="'/static/public/uploads/'+ item.imageUrl"
              >
              </v-card-media>
              <v-card-title>
              <div>
                <span class="black--text">{{ item.name }}</span><br>
                <span>{{ item.desc }}</span>
             </div>
             </v-card-title>
             <v-card-actions>
              <v-checkbox color="light-blue lighten-2" v-bind:label="`${item.name}`" v-model="rocks" v-bind:value="item.id" light></v-checkbox>
             </v-card-actions>      
             </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <v-btn color="primary"
          :disabled="rockIsValid"
         @click.native="e1 = 2">Continue</v-btn>
        <v-btn flat :disabled="!rockIsValid" @click.native="e1 = 2">Not Applicable</v-btn>
        <v-card flat height="50px"></v-card>
      </v-stepper-content>

   
      <v-stepper-content step="2">
       <v-container >
          <v-layout row wrap >
            <v-flex xs12 sm6 lg3 offset sm-3
              class="padding2"
              v-for="item in plantItems"
              :key="item.id">
              <v-card style="margin-left:10px;">
              <v-card-media
              height="200px"
             v-bind:src="'/static/public/uploads/'+ item.imageUrl"
              >
              </v-card-media>
              <v-card-title>
              <div>
                <span class="black--text">{{ item.name }}</span><br>
                <span>{{ item.desc }}</span>
             </div>
             </v-card-title>
             <v-card-actions>
              <v-checkbox color="light-blue lighten-2" v-bind:label="`${item.name}`" v-model="plants" v-bind:value="item.id" light></v-checkbox>
             </v-card-actions>                
             </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <v-btn color="primary"
         @click.native="e1 = 1">Back</v-btn>
        <v-btn color="primary" 
        @click.native="e1 = 3"
        :disabled="plantIsValid"
        >Continue</v-btn>
        <v-btn flat :disabled="!plantIsValid" @click.native="e1 = 3">Not Applicable</v-btn>
        <v-card flat height="50px"></v-card>
      </v-stepper-content>

      
      <v-stepper-content step="3">
        <v-container >
          <v-layout row wrap>
            <v-flex xs12 sm6 lg3 offset sm-3 v-for="item in fishItems"
              :key="item.id">
              <v-card style="margin-left:10px;"
              >
              <v-card-media
              height="200px"
              v-bind:src="'/static/public/uploads/'+ item.imageUrl"
              >
              </v-card-media>
              <v-card-title>
              <div>
                <span class="black--text">{{ item.name }}</span><br>
                <span>{{ item.desc }}</span>
             </div>
             </v-card-title>
             <v-card-actions>
              <v-checkbox color="light-blue lighten-2" v-bind:label="`${item.name}`" v-model="fishes" v-bind:value="item.id" light></v-checkbox>
             </v-card-actions>                
             </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <v-btn color="primary"
         @click.native="e1 = 2">Back</v-btn>
        <v-btn color="primary"
        :disabled="fishIsValid"
        @click.native="e1 = 4">Continue</v-btn>
        <v-btn flat :disabled="!fishIsValid" @click.native="e1 = 4">Not Applicable</v-btn>
        <v-card flat height="50px"></v-card>
      </v-stepper-content>


      <v-stepper-content step="4">
        <v-container>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
     <h3 class="grey--text">Enter your delivery address</h3>
     <br>
    </v-flex>
  </v-layout>
  <v-layout row>
    <v-flex xs12>
      <v-form @submit.prevent="onQuery">
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-text-field
              name="Address"
              label="Address"
              id="address"
              v-model="address"
              :rules="addRules"
              required> 
             </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-text-field
              name="City"
              label="City"
              id="city"
              v-model="city"
              :rules="cityRules"
              required> 
             </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-text-field
              name="Pincode"
              label="Pincode"
              id="pincode"
              v-model="pincode"
              :rules="pinRules"
              required> 
             </v-text-field>
          </v-flex>
        </v-layout>
         <v-flex xs12 sm6 offset-sm3>
          <v-btn color="primary"
         @click.native="e1 = 3">Back</v-btn>
          <v-btn color="primary" 
          class="white--text"
          :disabled="!formIsValid" @click="submitOrder"
          type="submit">
          SUBMIT</v-btn>
        </v-flex>
        </v-form>
        <v-card flat height="50px"></v-card>
    </v-flex>
  </v-layout>
</v-container>
        
      </v-stepper-content>

      <v-card>
  <v-snackbar v-model="snackbar"  top vertical :timeout=this.timeout>
    {{snackbarText}}
    <v-btn color="yellow" flat @click="snackbar = false">
      Close
    </v-btn>
  </v-snackbar>
</v-card>


    </v-stepper-items>
  </v-stepper>


</template>
<script>
  import RocksService from '../../services/RocksService'
  import PlantsService from '../../services/PlantsService'
  import FishesService from '../../services/FishesService'
  import OrdersService from '../../services/OrdersService'

  export default {

     beforeMount:function(){

   if(this.$store.state.isUserLoggedIn && !this.$store.state.user.isAdmin){
     
   }else
    {
      this.$store.commit('SET_LAYOUT','login-layout')
      this.$router.push('/login')
    }
    },
    
    data () {
      return {
        e1: 0,
        snackbarText: '',
      timeout: 3000,
      snackbar: false,

        rocks: [],
        plants: [],
        fishes: [],
        address: '',
        addRules: [
          v => !!v || 'Enter the address',
        ],
        city: '',
        cityRules: [
          v => !!v || 'Enter the city',
        ],
        pincode: '',
        pinRules: [
          v => !!v || 'Enter the pincode',
        ],
        rockItems:[],
        plantItems:[],
        fishItems:[],
        }
      },

      created () {
        this.initialize()
      },

      methods: {
        async initialize () {
          const rocks = await RocksService.index()
          console.log(rocks.data)
          this.rockItems = rocks.data
   

          const plants = await PlantsService.index()
          console.log(plants.data)
          this.plantItems = plants.data

          const fishes = await FishesService.index()
          console.log(fishes.data)
          this.fishItems = fishes.data

          this.address = this.$store.state.user.address
          this.city = this.$store.state.user.city
          this.pincode = this.$store.state.user.pincode
        },

activate() {
    setTimeout(() => this.$router.push('/user'), 3000);
  },
        async submitOrder(){
          const orderData = {
            "order": {
              "UserId": this.$store.state.user.id,
              "address": this.address,
              "city": this.city,
              "pincode": this.pincode
            },
            "rockIds": this.rocks,
            "plantIds": this.plants,
            "fishIds": this.fishes
          }

          try {
            const response = await OrdersService.post(orderData)
            if(response.status==200) {
              
              this.snackbarText = "Order Placed Successfully";
              this.snackbar=true; 

              this.activate();

            }
          }
          catch(error) {
            alert(error.response.data.error)
          }
        }
      },

      computed: {
      formIsValid () {
        return this.address !== '' && this.city !== '' && this.pincode !== ''
      },
      plantIsValid () {
        if ( this.plants.length === 0)    
          return true
       else 
          return false
      },
      rockIsValid()
      {
       if ( this.rocks.length === 0)    
          return true
       else 
          return false
      },
      fishIsValid () {
        if ( this.fishes.length === 0)    
          return true
       else 
          return false
      }
  }
}
</script>
<style scoped>
.padding1
{
  right: 10px;

}
.padding2
{
  right: px;

}
@media only screen and (max-width: 786px)
{
.padding1
{
  right: 0px;

}
.padding2
{
  right: 0px;

}
}
</style>