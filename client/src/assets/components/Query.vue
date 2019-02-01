<template>
<v-container>
  <v-layout row>
  	<v-flex xs12 sm6 offset-sm3>
     <h3 class="grey--text">Enter your query here</h3>
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
              multi-line
  				    required>	
  				    </v-text-field>
  				</v-flex>
  			</v-layout>
         <v-flex xs12 sm6 offset-sm3>
  			  <v-btn color="indigo" 
          class="white--text"
          :disabled="!formIsValid"
          type="submit">
          SUBMIT</v-btn>
        </v-flex>
  			</v-form>
  	</v-flex>
  </v-layout>
</v-container>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        description: ''
      }
    },
    computed: {
      formIsValid () {
        return this.email !== '' && this.description !== ''
      }

    }
  }
</script>

