<template>

<v-layout row justify-center align-center>

<v-flex lg5 sm6 xs10 row justify-center align-center>

<v-card lg5 sm6 xs10 style="margin-top:100px; padding:30px;">
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
<router-link to="/reset" style="text-decoration:none;">
   <v-btn
     :disabled="!valid"
     @click="submit"
     color="success"
   >
     Submit
   </v-btn>
</router-link>


 </center>


 </v-form>


</div>
</v-card>

</v-flex>

</v-layout>

</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      valid: true,

      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-h]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported


        }
      },
      clear () {
        this.$refs.form.reset()
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
