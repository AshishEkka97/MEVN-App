<script type="text/JavaScript" src="jquery.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="js/scripts.js"></script>


<template>
<v-layout row justify-center align-center>

<v-flex lg5 sm6 xs10 row justify-center align-center style="margin-bottom:50px;">
<center>
<v-card style="margin-top:10px; padding:30px;">
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

  <p align="right" ><router-link to="/forgot" class="forget">Forgot Password</router-link></p>

  <br>
  <center style="clear:both;">
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

    <p style="font-size:16px;" class="dont">
      Don't have an account? &nbsp;&nbsp;&nbsp;
      <router-link to="/register" style="text-decoration:none;">
        <b id="signup">Signup</b>
      </router-link>
    </p>
  </center>


 </v-form>


</div>

</v-card>
</center>
</v-flex>

<v-card>
  <v-snackbar v-model="snackbar" right top vertical :timeout=this.timeout>
    Please Verify Your Email
    <v-btn color="yellow" flat @click="verify_email">
      Verify
    </v-btn>
  </v-snackbar>
</v-card>

<v-card>
  <v-snackbar v-model="snackbar2" right top vertical :timeout=this.timeout>
    {{snackbarText}}
    <v-btn color="yellow" flat @click="snackbar2 = false">
      Close
    </v-btn>
  </v-snackbar>
</v-card>


  <v-card>
  <v-snackbar v-model="snackbar3"  top vertical :timeout=this.timeout1>
    {{ErrorText}}
    <v-btn color="yellow" flat @click="snackbar3 = false">
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

  beforeMount:function(){
    if(this.$store.state.isUserLoggedIn && this.$store.state.user.isAdmin)
    {
      this.$store.commit('SET_LAYOUT','admin-layout')
      this.$router.push('/adminhome')
    }
    else if (this.$store.state.isUserLoggedIn && !this.$store.state.user.isAdmin)
    {
      this.$store.commit('SET_LAYOUT','user-layout')
      this.$router.push('/user')
    }
     else
     {
     this.$store.commit('SET_LAYOUT','login-layout') 
      this.$router.push('/login')
    }
  },

    data: () => ({
      valid: true,
      snackbarText: '',
      ErrorText:'',
      timeout: 100000,
      timeout1: 6000,
      snackbar: false,
      snackbar2: false,
      snackbar3:false,
      email: '',
      password: '',
      error: null,
      id:null,

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

            this.id=response.data.user.id;

            console.log(response.data)

            if(response.data.user.isVerified) {
              this.$store.dispatch('setToken', response.data.token)
              this.$store.dispatch('setUser', response.data.user)

              if(response.data.user.isAdmin==1) {
                this.$store.commit('SET_LAYOUT','admin-layout')
                this.$router.push('/adminhome')
              } else {
                this.$store.commit('SET_LAYOUT','user-layout')
                this.$router.push('/user')
              }
            }
            else {
              console.log(this.id)
              this.snackbar=true;
            }      
          } catch (error) {
            //this.error = error.response.data.error
            //alert(error.response.data.error)
            this.ErrorText = error.response.data.error;
              this.snackbar3=true; 
          }
        }
      },

      async verify_email() {
        this.snackbar=false;
        this.snackbarText = "Sending a verifiation link to your mail. Please wait..."
        this.snackbar2=true;
        console.log(this.id)
        const res = await EmailService.post(this.id)
        console.log(res)
        if(res.status==200) {
          this.snackbar2 = false
          this.snackbarText = "Link sent to your email. Please check your email and verify."
          this.snackbar2 = true
        }
      }
    }
  }
</script>

<style>
  .error {
    color: "red";
    backgroung-color:white;
  }

  .forget {
    color:blue; cursor:pointer; font-size:12px;
    transition:0.4s; text-decoration:none;
    float:right;
  }

  .forget:hover {
    text-decoration:underline; color:black;
  }

  #signup {
    color:blue; cursor:pointer; text-decoration:none;
    transition:0.4s;
  }

  #signup:hover {
    text-decoration:underline; color:black;
  }
</style>
