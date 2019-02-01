<template>
  
<v-container>
  <v-layout row>
  	<v-flex xs12 sm6 offset-sm3>
     <h2 class="grey--text">Submit your query here</h2>
     <br>
    </v-flex>
  </v-layout>
  <v-layout row>
  	<v-flex xs12>
  		<v-form>
  			<v-layout row>
  				<v-flex xs12 sm6 offset-sm3>
  				  <v-text-field
  				    name="Email"
  				    label="Email"
  				    id="Email"
              v-model="email"
              :rules="emailRules"
  				    required>	
  				   </v-text-field>
  				</v-flex>
  			</v-layout>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-text-field
              name="Contact"
              label="Contact"
              id="Contact"
              v-model="contact"
            
              required> 
             </v-text-field>
          </v-flex>
        </v-layout>

  			<v-layout row>
  			  <v-flex xs12 sm6 offset-sm3>
  				  <v-text-field
  				    name="Description"
  				    label="Description"
  				    id="Description"
              v-model="description"
              :rules="[(v) => v.length <= 200 || 'Max 200 characters']"
              :counter="200"
              multi-line
  				    required>	
  				    </v-text-field>
  				</v-flex>
  			</v-layout>
         <v-flex xs12 sm6 offset-sm3>
  			  <v-btn color="indigo" 
          class="white--text"
          :disabled="!formIsValid"
           @click="save">
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
 import QueryService from '../../services/QueryService'

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
   snackbarText: '',
      timeout: 2000,
      snackbar: false,
email: this.$store.state.user.email,
emailRules: [
v => !!v || 'E-mail is required',
v => /^\w+([.-h]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
],
contact: this.$store.state.user.contact,

description: ''

}
},

methods:{
    activate() {
    setTimeout(() => this.$router.push('/user'), 2000);
  },
async save() {
try {
const response = await QueryService.post({
email: this.email,
contact: this.contact,
desc: this.description
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
}
},

computed: {
formIsValid () {
return this.email !== '' && this.description !== '' && this.contact
}

}
}
</script>