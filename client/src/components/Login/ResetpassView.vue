<template>
<v-layout row justify-center align-center>

<v-flex lg5 sm6 xs10 row justify-center align-center class="division">


<v-card style="margin-top:10px; padding:30px;">
<div>
<center><h1 lg5 sm6 xs10 style="color:gray;">Reset Your Password</h1></center>
<br>
<p>Please enter new password.</p>

<v-form ref="form" v-model="valid" lazy-validation>
<v-text-field label="Password" :rules="passwordRules" v-model="password" type="password" required></v-text-field>
<v-text-field label="Confirm Password" v-model="confirmPassword" :rules="comparePassword" type="password" required></v-text-field>

<br>
<center>
<v-btn @click="submit" :disabled="!valid" color="success">Reset Password</v-btn>
</center>
</v-form>

</div>
</v-card>

</v-flex>

  <v-card>
  <v-snackbar v-model="snackbar"  top vertical :timeout=this.timeout>
    {{SnackbarText}}
    <v-btn color="yellow" flat @click="snackbar = false">
      Close
    </v-btn>
  </v-snackbar>

</v-card>
</v-layout>
</template>



<script>
   import AuthenticationService from '../../services/AuthenticationService'
  import EmailService from '../../services/EmailService'

export default{

name:'signup',
computed:{

comparePassword(){
return [this.password !== this.confirmPassword ? 'Passwords do not match' : true];
}

},

data(){
return{
  valid: true,
        SnackbarText: '',
      timeout: 3000,
      snackbar: false,
passwordRules: [
  v => !!v || 'Password is required',
  v => /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/.test(v) || 'Password must contain at least: 1 Uppercase, 1 Lowercase, 1 Number & 1 Special character'
],

token:'',
password:'',
confirmPassword:''

}
},

methods: {
    activate() {
    setTimeout(() => {
      this.$store.dispatch('setToken',null),
      this.$store.dispatch('setUser',null),
      this.$store.isUserLoggedIn=false,
      this.$store.commit('SET_LAYOUT','login-layout'),
      this.$router.push('/')
    }, 2000);
  },

  async submit () {
    if (this.$refs.form.validate()) {
      try {
        const updated = await AuthenticationService.reset(this.$route.query.token, this.password)

        console.log(updated)
        if(updated.status==200)
        {
          this.SnackbarText="Password updated successfully!";
          this.snackbar=true;
           this.activate();
        }

      }
      catch(error)
      {

        console.log(error)
        this.SnackbarText="Conncetion error, Try again later.";
        this.snackbar=true;
      }
    }
  }

}

}

</script>

<style>

.division
{
  margin-top:60px;
}
@media only screen and (max-width: 786px)
{
.division
{
  margin-top:-30px; margin-bottom: 70px;
}
}

.forget
{
color:blue; cursor:pointer; font-size:12px;
transition:0.4s;
}
.forget:hover
{
text-decoration:underline;
}

#signup
{
color:blue; cursor:pointer; text-decoration:none;
}
#signup:hover
{
text-decoration:underline;
}
</style>
