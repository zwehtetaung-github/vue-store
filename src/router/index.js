import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import CartItemView from '../views/CartItemView.vue'
import SignUpView from '../views/SignUpView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/account/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/account/register',
    name: 'register',
    component: SignUpView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartItemView
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  routes
})


export default router
