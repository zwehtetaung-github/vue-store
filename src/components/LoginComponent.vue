<template>
    <div>
        <h1 class="mt-12">Vuetify Store Account</h1>
        <h3 class="mt-5 mb-4">Receive fantastic promotions with the store account and have access to your order history</h3>
        <v-container class="login">
            <v-card class="mx-auto my-12" max-width="500">
                <v-card-title class="grey--text">Log In</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                        <v-text-field type="email" v-model="user.email" required label="Email" outlined></v-text-field>
                        <v-text-field type="password" v-model="user.password" required label="Password" outlined></v-text-field>
                        <div v-if="errMsg" class="alert alert-danger">{{ errMsg }}</div>
                        <v-btn block @click="login" height="45" color="#00B0FF">Log In</v-btn>
                        <p class="mt-5">forgotten password?</p>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-flex justify-center>
                        <v-btn to="/account/register" height="55" color="#00E676">Create New Account</v-btn>
                    </v-flex>
                </v-card-actions>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
    name: 'LoginComponent',
    data: () => ({
        user: {
            email: '',
            password: '',
            errMsg: '',
        },
    }),
    methods: {
        login() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth,this.user.email,this.user.password)
            .then(()=>{
                this.$router.push('/');
            })
            .catch((error) => {
                switch(error.code) {
                    case "auth/invalid-email": 
                        this.errMsg = "Invalid email";
                        break;
                    case "auth/user-not-found":
                        this.errMsg = "No account with that email was found";
                        break;
                    case "auth/wrong-password": 
                        this.errMsg = "Incorrect password";
                        break;
                    default: 
                        this.errMsg = "Email or password was incorrect";
                        break;
                }
            })
        },
    },
}
</script>