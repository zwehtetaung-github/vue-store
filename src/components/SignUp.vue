<template>
  <div>
        <h1 class="mt-12">Create Vuetify Store Account</h1>
        <h3 class="mt-5 mb-4">Receive fantastic promotions with the store account and have access to your order history</h3>
        <v-container class="signup">
            <v-card class="mx-auto my-12" max-width="500">
                <v-card-title class="grey--text">Create Account</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-form>
                        <v-text-field type="text" v-model="user.name" required label="Name" outlined></v-text-field>
                        <v-text-field type="email" v-model="user.email" required label="Email" outlined></v-text-field>
                        <v-text-field type="password" v-model="user.password" required label="Password" outlined></v-text-field>
                        <v-btn block @click="register" height="45" color="#00E676">Register</v-btn>
                    </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-flex justify-center>
                      <router-link to="/account/login" class="routerLink"><p>Already have an account? Click here.</p></router-link>
                    </v-flex>
                </v-card-actions>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'SignUpComponent',
  data: () => ({
    user: {
      name: '',
      email: '',
      password: ''
    },
  }),
  methods: {
    register() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.user.email, this.user.password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: this.user.name
          })
          .then(() => {
            this.$router.push('/login')
          });
      })
      .catch((error) => {
        alert(error.message);
      });
    }
  }
}
  // import { ref } from 'vue'
  // import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

  // const email = ref('');
  // const password = ref('');
  // const register = () => {
  //   const auth = getAuth()
  //   createUserWithEmailAndPassword(auth, email.value, password.value)
  //     .then(() => {
  //       alert("Successful regisered!");
  //       console.log("Register successful");
  //       console.log(auth.currentUser);
  //     })
  //     .catch((error) => {
  //       console.log(error.code);
  //       alert(error.message);
  //     });
  // }
</script>

<style>
.routerLink {
  text-decoration: none;
}
</style>