<template>
    <v-col cols="12" md="3">
        <v-card class="mx-auto mb-5 mt-3" max-width="300">
            <v-img
            :src="product.image"
            max-height="250"
            ></v-img>   

            <v-card-title class="font-weight-bold">
                {{ product.title }}
            </v-card-title>

            <v-card-text>
                {{ product.subtitle }}
                {{ product.price | dollars }}
            </v-card-text>

            <v-card-actions>
                <v-rating :value="4.5" half-increments color="amber" dense size="16"></v-rating>
                <v-spacer></v-spacer>
                <v-btn outlined color="red" @click="addToCart(product)">
                    <v-icon color="red">mdi-shopping</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>

<script>
import { dollars } from '@/filters';

export default {
    name: 'ProductComponent',
    props: ['product'],
    filters: {
        dollars,
    },
    methods: {
        addToCart(product) {
            this.$emit('add-To-Cart', product);
        },
    },
}
</script>

<style scoped>
.v-card.on-hover.theme--dark {
    background-color: rgba(#FFF, 0.8)
}
.grow {
  transition: all .2s ease-in-out;
}
.grow:hover {
    transform: scale(1.1);
}
</style>