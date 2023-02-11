<template>
    <div class="cart">
        <CartItem />
    </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'

export default {
    name: 'CartItemView',
    components: {
        CartItem,
    }
}
</script>

<style>

</style>