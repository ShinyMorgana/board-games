<template>
    <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="submitLogin" class="form">
            <div class="form-group">
                <label for="email" class="label">Email:</label>
                <input type="email" id="email" class="input" v-model="loginForm.email" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" class="input" v-model="loginForm.password" required>
            </div>
            <button type="submit" class="button">Login</button>
            <router-link to="/register" class="button">Register</router-link>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                email: '',
                password: '',
            },
        };
    },
    methods: {
        submitLogin() {
            // Here you'd implement your login logic, possibly using an API call
            console.log('Login submitted', this.loginForm);
            // After successful login, you may want to redirect to a different page
        },
    },
};
</script>