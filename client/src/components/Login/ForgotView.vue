<template>

<v-layout row justify-center align-center>

<v-flex lg5 sm6 xs10 row justify-center align-center class="division">

<v-card lg5 sm6 xs10 style="padding:30px;">
<div>
<center><h1 style="color:gray;">Forgot Password?</h1></center>
<br>
<p>Please submit your Email Id, We will send a link to reset your password.</p>
<v-form ref="form" v-model="valid" lazy-validation>

   <v-text-field
     v-model="email"
     :rules="emailRules"
     label="E-mail"
     color="success"
     required
   ></v-text-field>

<br>

<center>

   <v-btn
     :disabled="!valid"
     @click="submit()"
     color="success"
   >
     Submit
   </v-btn>



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
  import axios from 'axios'
   import AuthenticationService from '../../services/AuthenticationService'
  import EmailService from '../../services/EmailService'


  export default {
    data: () => ({
      valid: true,
      SnackbarText: '',
      timeout: 6000,
      snackbar: false,

      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-h]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }),

    methods: {
      async submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
            try {
            const response = await AuthenticationService.forgot({
              email: this.email
            })
            console.log(response)
            if(response.status==200) {
              this.SnackbarText="Link sent! Check your email."
              this.snackbar=true;
            }

          } catch (error) {
            this.SnackbarText = "No such user found!";
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
  margin-top:90px;
}
@media only screen and (max-width: 786px)
{
.division
{
  margin-top:0px;
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
