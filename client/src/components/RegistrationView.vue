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

<script>
	import AuthenticationService from '../services/AuthenticationService'
	export default {
		data () {
			return {
				email: '',
				password: '',
				error: null
			}
		},
		methods: {
			async register () {
				try {
					await AuthenticationService.register({
						email: this.email,
						password: this.password
					})
				} catch (error) {
					this.error = error.response.data
				}
			}
		}
	}
</script>

<style>
	.error {
		color: "red";
	}
</style>