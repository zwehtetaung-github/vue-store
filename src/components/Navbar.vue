<template>
    <v-container>
    <v-app-bar app color="#FFFFFF" flat sticky-top>
        <svg role="img" class="ml-15 mr-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor" height="25" width="25"><path d="M7.094 0L12 11.596 16.906 0H7.094zM1.5 3.5L12 24 22.5 3.5H17L12 15 7 3.5z" id="mainIconPathAttribute"></path></svg>
      <v-toolbar-title>
        <span class="font-weight-bold">VUETIFY STORE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <router-link to="/" class="routerLink mr-3 mt-1"><span class="font-weight-bold" style="color: black;">Home</span></router-link>
        <v-tooltip v-model="show" bottom>
          <template v-slot:activator="{ on, attrs}">
            <router-link to="/account/login" class="routerLink mr-3 mt-1"><v-icon v-bind="attrs" v-on="on" color="black">mdi-account-outline</v-icon></router-link>
          </template>
          <span>Account</span>
        </v-tooltip>
      <v-badge :color="numInCart === 0 ? '' : 'red'" overlap :content="numInCart" class="mr-15 mt-1">
        <v-avatar color="" size="40">
          <router-link to="/cart" class="routerLink"><v-icon color="black">mdi-cart-outline</v-icon></router-link>
        </v-avatar>
      </v-badge>
    </v-app-bar>
  </v-container>
</template>

<script>
  export default {
    name: 'NavbarComponent',
    data: () => ({
        show: false,
    }),
    computed: {
      cart() {
        return this.$store.getters.cart;
      },
      numInCart() {
        return this.cart.length;
      }
    }
  }
</script>

<style>
  .routerLink {
    text-decoration: none;
  }

  .hover:hover{
    color: blue;
  }

</style>
