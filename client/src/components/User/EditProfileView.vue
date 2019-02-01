<template>
<v-container>
<v-layout padding>
<v-flex xs12 sm6 offset-sm3>
<v-card class="top" >
<v-card-media
<v-list class="indigo">
<v-list-tile avatar>
<v-list-tile-avatar>
<img src="static/img/default.jpeg" >
</v-list-tile-avatar>
<v-list-tile-content>
<v-list-tile-title style="color:white;">{{username}}</v-list-tile-title>
</v-list-tile-content>
</v-list-tile>
</v-list
></v-card-media>
<v-spacer></v-spacer>
<v-layout row>
<v-flex xs12 sm6 offset-sm3>
<v-text-field
box
name="Contact"
label="Contact"
id="Contact"
v-model="contact"
append-icon="edit">
</v-text-field>
</v-flex>
</v-layout>
<v-layout row>
<v-flex xs12 sm6 offset-sm3>
<v-text-field
box
name="Address"
label="Address"
id="address"
v-model="address"
:rules="addRules"
append-icon="edit"
>
</v-text-field>
</v-flex>
</v-layout>
<v-layout row>
<v-flex xs12 sm6 offset-sm3>
<v-text-field
box
name="City"
label="City"
id="city"
v-model="city"
:rules="cityRules"
append-icon="edit">
</v-text-field>
</v-flex>
</v-layout>
<v-layout row>
<v-flex xs12 sm6 offset-sm3>
<v-text-field
box
name="Pincode"
label="Pincode"
id="pincode"
v-model="pincode"
:rules="pinRules"
append-icon="edit"
></v-text-field>
</v-flex>
</v-layout>


<center>
<v-btn color="indigo"
outline
class="white--text"

@click="submit()"
>
Change Password</v-btn>

<v-btn color="indigo"
class="white--text"
@click="edit"
>
Save Changes</v-btn>

</center>
</v-card>
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

  <v-card>
  <v-snackbar v-model="snackbar1"  top vertical :timeout=this.timeout>
    {{SnackbarText1}}
    <v-btn color="yellow" flat @click="snackbar1 = false">
      Close
    </v-btn>
  </v-snackbar>
</v-card>
</v-container>



</template>


<script>
import UsersService from '../../services/UsersService'
   import AuthenticationService from '../../services/AuthenticationService'
  import EmailService from '../../services/EmailService'

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
	snackbarText: '',
      timeout: 10000,
      snackbar: false,

        SnackbarText1: '',
      snackbar1: false,
username:this.$store.state.user.email,

contact:this.$store.state.user.contact,
address:this.$store.state.user.address,
city: this.$store.state.user.city,
pincode: this.$store.state.user.pincode
}
},

methods: {
	
async edit() {
try {
const response = await UsersService.put(this.$store.state.user.id,{

contact: this.contact,
address: this.address,
city: this.city,
pincode: this.pincode
})

 		this.snackbarText = "Profile Updated";
        this.snackbar=true;

}
catch (error) {
alert(error.response.data.error)
}
},


      async submit () {
  
          // Native form submission is not yet supported
            try {
            const response = await AuthenticationService.forgot({
              email: this.$store.state.user.email
            })
            console.log(response)
            if(response.status==200) {
              this.SnackbarText1="Link sent! Check your email."
              this.snackbar1=true;
            }

          } catch (error) {
            this.SnackbarText1 = error;
              this.snackbar1=true; 
          }

        
      }


}
}
</script>
<style scoped>
.top
{
top: 0px;
}