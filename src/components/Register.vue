<template>
    <div class="container">
        <h1>Register</h1>
        <form @submit.prevent="submitRegister" class="form">
            <div class="form-group">
                <label for="name" class="label">Name:</label>
                <input type="text" id="name" class="input" v-model="registerForm.name" required>
            </div>
            <div class="form-group">
                <label for="email" class="label">Email:</label>
                <input type="email" id="email" class="input" v-model="registerForm.email" required>
            </div>
            <div class="form-group">
                <label for="password" class="label">Password:</label>
                <input type="password" id="password" class="input" v-model="registerForm.password" required>
            </div>
            <div class="form-group">
                <label for="confirmPassword" class="label">Confirm Password:</label>
                <input type="password" id="confirmPassword" class="input" v-model="registerForm.confirmPassword"
                    required>
            </div>
            <button type="submit" class="button">Register</button>
        </form>
    </div>
</template>


<script>
export default {
    data() {
        return {
            registerForm: {
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
        };
    },
    methods: {
        submitRegister() {
            // Here you'd implement your registration logic
            console.log('Registration submitted', this.registerForm);
            // Perform validation to check if passwords match, etc.
            // Make an API call to register the user
            // Redirect to a different page or display a success message
        },
    },
};
</script>
