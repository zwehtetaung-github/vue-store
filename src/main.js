import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from '@/store'
import { initializeApp } from 'firebase/app'

import("popper.js");
import("bootstrap/dist/css/bootstrap.min.css");

Vue.use(Vuex)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCAXEwXqlRczxa4-_-CT73_K41dIdMjP40",
  authDomain: "vue-store-354e6.firebaseapp.com",
  projectId: "vue-store-354e6",
  storageBucket: "vue-store-354e6.appspot.com",
  messagingSenderId: "83517803267",
  appId: "1:83517803267:web:020f4c980c1dd0ffb8f736",
  measurementId: "G-YRZY1SMNWL"
};

// Initialize Firebase
initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
