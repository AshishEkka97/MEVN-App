<script type="text/JavaScript" src="jquery.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="js/scripts.js"></script>


<template>
<v-layout row justify-center align-center>

<v-flex lg5 sm6 xs10 row justify-center align-center>
<center>
<v-card style="margin-top:90px; padding:30px;">
<div>

<center><h1 style="color:gray;">Login to Wooscape</h1></center>
<br>
<v-form ref="form" v-model="valid" lazy-validation>

   <v-text-field
     v-model="email"
     type="email"
     name="email"
     :rules="emailRules"
     label="E-mail"
     color="success"
     required
   ></v-text-field>

   <v-text-field
    type="password"
    name="password"
     v-model="password"
     :rules="passwordRules"
     label="Password"
     color="success"
     required
   ></v-text-field>


  <router-link to="/forgot" style="text-decoration:none;"><p align="right"  class="forget">Forgot Password</p></router-link>

<center>
   <v-btn
     :disabled="!valid"
    @click="login()"
     color="success"
   >
     Login
   </v-btn>
<br>

<div class="error" v-html="error"/>

<span>OR</span>
<br>

<v-btn id="but" name="but" style="background-color:rgb(59, 89, 152); color:white;">  <v-flex xs12> <v-icon size="22px" color="white" class="mr-3">fab fa-facebook</v-icon> </v-flex>
Login with Facebook</v-btn>

<br><br>

  <p style="font-size:16px;"  class="dont">Don't have an account? &nbsp;&nbsp;&nbsp; <router-link to="/register" style="text-decoration:none;"><b id="signup">Signup</b>   </router-link></p>

 </center>


 </v-form>


</div>
</v-card>
</center>
</v-flex>
</v-layout>
</template>

<script>
  import axios from 'axios'
  import AuthenticationService from '../services/AuthenticationService'

  export default {

    data: () => ({
      valid: true,

       email: '',
        password: '',
        error: null,

      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-h]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],

      
      passwordRules: [
        v => !!v || 'Password is required',
        v => /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/.test(v) || 'Password must contain at least: 1 Uppercase, 1 Lowercase, 1 Number & 1 Special character'
      ]
    }),

    methods: {

      async login () {
       if (this.$refs.form.validate()) {

        try {

         const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })

          console.log(response)

          this.$store.dispatch('setToken', response.data.token)


          this.$store.dispatch('setUser', response.data.user)

          this.$store.commit('SET_LAYOUT','admin-layout')

          
          this.$router.push('/admin')

        } catch (error) {
          this.error = error.response.data
        }

        }
      }

    }
  }
</script>

<style>

  .error {
    color: "red";
  }


.forget
{
color:blue; cursor:pointer; font-size:12px;
transition:0.4s; text-decoration:none;
}
.forget:hover
{
text-decoration:underline; color:black;
}

#signup
{
color:blue; cursor:pointer; text-decoration:none;
transition:0.4s;
}
#signup:hover
{
text-decoration:underline; color:black;
}
</style>
