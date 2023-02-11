<template>
   <div>
    <div v-if="numInCart !== 0">
        <v-container>
            <v-card 
                elevation="2"
                v-for="product in cart"
                :key="product.id"
                class="mb-5"
            >
                <v-row align="center">
                    <v-col cols="3">
                        <v-img :src="product.image" contain max-height="200" max-width="200"></v-img>
                    </v-col>
                    <v-col cols="4">
                        <p class="font-weight-bold">{{ product.title }}</p>
                        <v-card-text>{{ product.price | dollars }}</v-card-text>
                        <v-btn-toggle>
                            <v-btn icon><v-icon color="grey" @click="decreaseQuantity(product.id)">fa-minus</v-icon></v-btn>
                            <input 
                                type="text"
                                v-model="product.quantity"
                                style="width: 40px; text-align: center; display: inline-block; border: none;"
                            />
                            <v-btn icon><v-icon color="grey" @click="increaseQuantity(product.id)">fa-plus</v-icon></v-btn>
                        </v-btn-toggle>
                    </v-col>
                    <v-col cols="3">
                        <p class="font-weight-bold">SubTotal: {{ product.price * product.quantity | dollars }}</p>
                    </v-col>
                    <v-col cols="2">
                        <v-card-actions index>
                            <v-btn icon>
                                <v-icon color="black" @click="removeFromCart(product.id)">&times;</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
        <v-divider></v-divider>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-row no-gutters>
                <v-col cols="6">
                    <h5 class="font-weight-bold">Total: {{ total | dollars}}</h5>
                </v-col>

                <v-col cols="6">
                    <v-btn icon>
                        <v-card-text @click="clearAll" class="emptycart">EMPTY CART</v-card-text>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn
                        color="#423144"
                        width="50%"
                        class="white--text"
                        @click="handleCheckOut"
                        style="font-size: 1em"
                    >
                        PROCEED TO CHECK OUT
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="#423144"
                        class="my-3"
                        outlined
                        width="50%"
                        to="/"
                        style="font-size: 1em"
                    >
                        CONTINUE SHOPPING
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
    </div>
    <div v-else>
        <v-btn outlined color="primary" position="left" to="/">Continue shopping</v-btn>
        <div class="content">
            <img src="empty_cart.svg" height="250" width="250">
            <v-spacer></v-spacer>
            <p style="color: #42A5F5; font-size: 1.2em;">Your shopping cart is empty.</p>
        </div>
    </div>
    <v-snackbar color="success" rounded v-model="snackbar" :timeout="timeout">Removed product from Cart!</v-snackbar>
   </div>
</template>

<script>
import { dollars } from '@/filters';

export default {
    name: 'CartItem',
    data: () => ({
        snackbar: false,
        timeout: 1000,
    }),
    filters: {
        dollars,
    },
    computed: {
        cart() {
            return this.$store.getters.cart;
        },
        numInCart() {
            return this.cart.length;
        },
        total() {
            return this.cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
        },  
    },
    methods: {
        decreaseQuantity(productId){
            this.$store.dispatch('decreaseQuantity', productId);
        },
        increaseQuantity(productId){
            this.$store.dispatch('increaseQuantity', productId);
        },
        removeFromCart(productId) {
            this.$store.dispatch('removeFromCart', productId);
            this.snackbar = true;
        },
        clearAll(){
            this.$store.dispatch('clearAll');
        },
        handleCheckOut() {
            alert('please login in!')
        }
    }
}
</script>

<style>
.content {
    height: calc(65vh - 92px);
}
</style>