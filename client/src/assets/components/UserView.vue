<template>
    <div>
        <form @submit.prevent="onSubmit">
            <v-text-field label="Name" :rules="nameRules" v-model="name" required></v-text-field>
            <v-text-field label="Email" type="email" v-model="email" :rules="emailRules" required></v-text-field>
            <v-text-field label="Contact Number" type="contactno" v-model="contactno" :rules="contactRules" required></v-text-field>
            <v-text-field label="Password" :rules="passwordRules" v-model="password" type="password" required></v-text-field>
            <v-text-field label="Confirm Password" v-model="confirmPassword" :rules="comparePassword" type="password" required></v-text-field>
            <v-btn type="submit" :rules="submitRules" >Register</v-btn>f
        </form>
    </div>
    
</template>

<script>

</script>
<style scoped>
    
</style>