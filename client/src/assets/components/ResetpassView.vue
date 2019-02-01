<template>
<v-layout row justify-center align-center>

<v-flex lg5 sm6 xs10 row justify-center align-center>


<v-card style="margin-top:100px; padding:30px;">
<div>
<center><h1 lg5 sm6 xs10 style="color:gray;">Reset Your Password</h1></center>
<br>
<p>Please enter new password.</p>

<v-form ref="form" v-model="valid" lazy-validation>
<v-text-field label="Password" :rules="passwordRules" v-model="password" type="password" required></v-text-field>
<v-text-field label="Confirm Password" v-model="confirmPassword" :rules="comparePassword" type="password" required></v-text-field>

<br>
<center>
<v-btn type="submit" @click="submit" :disabled="!valid" :rules="submitRules" color="success">Reset Password</v-btn>
</center>
</v-form>

</div>
</v-card>

</v-flex>
</v-layout>
</template>



<script>

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
passwordRules: [
  v => !!v || 'Password is required',
  v => /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/.test(v) || 'Password must contain at least: 1 Uppercase, 1 Lowercase, 1 Number & 1 Special character'
],

name:'',
email:'',
password:'',
confirmPassword:'',
contactno:''

}
},

methods: {
  submit () {
    if (this.$refs.form.validate()) {
      // Native form submission is not yet supported


    }
  }

}

}

</script>

<style>
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
