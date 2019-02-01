<!--
<template>
	<div>
		<h1>Registration</h1>
		<input type="email" name="email" placeholder="email" v-model="email">
		<br>
		<input type="password" name="password" placeholder="password" v-model="password">
		<br>
		<div class="error" v-html="error"/>
		<button type="submit" @click="register()">Register</button>
	</div>
</template>

-->



<template>
<v-layout row justify-center align-center>

<v-flex lg5 sm6 xs10 row justify-center align-center>
<center>
<v-card style="margin-top:30px; padding:30px;">
<div>
<center><h1 lg5 sm6 xs10 style="color:gray;">Create New Account</h1></center>


<br>

<v-form ref="form" v-model="valid" lazy-validation>

<v-text-field label="Email" type="email" name="email" v-model="email" :rules="emailRules" required></v-text-field>

<v-text-field label="Password" :rules="passwordRules" name="password" v-model="password" type="password" required></v-text-field>

<v-text-field label="Confirm Password"   v-model="confirmPassword" :rules="comparePassword" type="password" required></v-text-field>

<br>

	<div class="error" v-html="error"/>


<center>
<v-btn  @click="register()" :disabled="!valid"  color="success">Sign Up</v-btn>

<br><br>
<span>OR</span>
<br>

<v-btn style="background-color:rgb(59, 89, 152); color:white;">  <v-flex xs12> <v-icon size="22px" color="white" class="mr-3">fab fa-facebook</v-icon> </v-flex>
Login with Facebook</v-btn>


</center>
</v-form>

</div>
</v-card>
</center>
</v-flex>
</v-layout>
</template>


<script>


  import AuthenticationService from '../services/AuthenticationService'
	
export default {

computed:{

comparePassword(){
return [this.password !== this.confirmPassword ? 'Passwords do not match' : true];
}

},


		data () {
			return {

valid: true,

  
  emailRules: [
    v => !!v || 'E-mail is required',
    v => /^\w+([.-h]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
  ],

passwordRules: [
  v => !!v || 'Password is required',
  v => /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/.test(v) || 'Password must contain at least: 1 Uppercase, 1 Lowercase, 1 Number & 1 Special character'
],

				email: '',
				password: '',
				confirmPassword: '',
				error: null
			}
		},
		methods: {
			async register () {
				   if (this.$refs.form.validate()) {

        try {
         const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
          })

          console.log(response.data)

          this.$store.dispatch('setToken', response.data.token)


          this.$store.dispatch('setUser', response.data.user)

          if(response.status==200)
          {
          alert("Successfully Registered!");
          this.$router.push('/')
          }

        } catch (error) {
          this.error = error.response.data.error,
          //alert(error.response.data);
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