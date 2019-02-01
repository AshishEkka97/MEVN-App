<template>
  
<v-container>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
     <h2 class="grey--text">Services</h2>
     <br>
    </v-flex>
  </v-layout>
  <v-layout row>
    <v-flex xs12>
      <v-form @submit.prevent="onQuery">
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-text-field
              name="ServiceArea"
              label="ServiceArea"
              id="ServiceArea"
              v-model="ServiceArea"
              :rules="serviceRules"
              required>
            </v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
           <v-menu
        ref="menu2"
        :close-on-content-click="false"
        v-model="menu2"
        :nudge-right="40"
        :return-value.sync="InstallationDate"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="InstallationDate"
          label="Installation Date"
          append-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" @input="$refs.menu2.save(date)"></v-date-picker>

      </v-menu>
          </v-flex>
        </v-layout>
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
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-checkbox
              @change="update"
              label="Maintenance"
              id="Maintenance"
              v-model="Maintenance"> 
            </v-checkbox>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
           <v-text-field
              name="TimeSlot"
              label="Time Slot (In Months)"
           
              v-model="timeslot"
              :disabled="!enable"
              > 
            </v-text-field>
          </v-flex>
        </v-layout>

         <v-flex xs12 sm6 offset-sm3>
          <v-btn color="indigo" 
          class="white--text"
          @click="send"
          :disabled="!isValid">
          SUBMIT</v-btn>
        </v-flex>
       
        </v-form>
         <v-card flat class="grey lighten-5" height="50px"></v-card>
    </v-flex>

  </v-layout>

  <v-card>
  <v-snackbar v-model="snackbar"  top vertical :timeout=this.timeout>
    {{snackbarText}}
    <v-btn color="yellow" flat @click="snackbar = false">
      Close
    </v-btn>
  </v-snackbar>
</v-card>

</v-container>

</template>

<script>
import ServicesService from '../../services/ServicesService'
  export default {
      
      beforeMount:function(){

   if(this.$store.state.isUserLoggedIn && !this.$store.state.user.isAdmin){
     
   }else
    {
      this.$store.commit('SET_LAYOUT','login-layout')
      this.$router.push('/login')
    }
    },
    
    data() {
      return {
    
        menu2: false,
      snackbarText: '',
      timeout: 2000,
      snackbar: false,
      date:null,
      ServiceArea: '',
        serviceRules: [
          v => !!v || 'Enter the service area',
        ],
      InstallationDate: null,
        installRules: [
          v => !!v || 'Enter the installation date',
        ],
      Maintenance: false,
      timeslot:null,
      check:0,
      address: this.$store.state.user.address,
        addRules: [
          v => !!v || 'Enter the address',
        ],
        city: this.$store.state.user.city,
        cityRules: [
          v => !!v || 'Enter the city',
        ],
        pincode: this.$store.state.user.pincode,
        pinRules: [
          v => !!v || 'Enter the pincode',
        ],
      items: [
      { text: '3 months' },
      { text: '6 months' },
      { text: 'Annually' }
      ]
    }
      },

methods:{
      async send() {
        
        try {
          const response = await ServicesService.post({
            UserId: this.$store.state.user.id,
            area: this.ServiceArea,
            date: this.InstallationDate,
            address: this.address,
            city: this.city,
            pincode: this.pincode,
            timeSlot:this.timeslot

          })
          if(response.status==200)
          {
            
              this.snackbarText = "Sent Successfully";
              this.snackbar=true; 

              this.activate();

          }
        }
        catch (error) {
          alert(error.response.data.error)
        }
      },

  activate() {
    setTimeout(() => this.$router.push('/user'), 2000);
  },

      update()
      {
        if(this.timeslot == null)
        {
          this.check=0;
        }
        else
          this.check=1;
      }

    },



      computed:{
        enable() {
          return this.Maintenance
      },
      isValid () {
        return this.ServiceArea !== '' && this.InstallationDate !== null && this.address !== '' && this.city !== '' && this.pincode !== ''
      }
    }
 
  }
</script>

