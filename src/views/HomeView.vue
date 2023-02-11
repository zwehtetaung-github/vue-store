<template>
  <div class="home">
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      >
        <div class="text-md-left ml-5">
          <h1 style="color: red;">Summer Collection</h1>
          <v-spacer></v-spacer>
          <h2>Fall - Winter Collections 2023</h2>
          <v-spacer></v-spacer>
          <p>A specialist label creating luxury essentials.</p> 
          <p>Ethically crafted with an unwavering commitment to exceptional quality.</p>
          <v-btn color="black" class="white--text">Shop now</v-btn>
          <div class="mt-5">
              <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 black--text"
                icon
              >
                <v-icon size="24px">
                  {{ icon }}
                </v-icon>
              </v-btn>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
    <Slider />
    <v-container>
      <h2 class="text-md-left mt-3 ">Best Sellers</h2>
      <v-row>
          <Product
            v-for="product in products"
            :key = "product.id"
            :product="product"
            @add-To-Cart="handleAddToCart(product)"
          />
      </v-row>
    </v-container>
    <Banner />
    <v-snackbar color="success" rounded v-model="snackbar" :timeout="timeout">Added to cart!</v-snackbar>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from '@/components/Product.vue';
import Banner from '@/components/Banner.vue';
import Slider from '@/components/Slider.vue';

export default {
  name: 'HomeView',
  components: {
    Product,
    Banner,
    Slider,
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
    cart() {
      return this.$store.getters.cart;
    }
  },
  data: () => ({
    snackbar: false,
    timeout: 1000,
    items: [
      {
        src: 'hero-1.jpg'
      },
      {
        src: 'hero-2.jpg'
      }
    ],
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),
  methods: {
    handleAddToCart(product){
      this.$store.dispatch('addToCart', product);
      this.snackbar = true;
    }
  }
}
</script>
