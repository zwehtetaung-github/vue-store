import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null,
        },
        products: [
            { 
                id: 1, 
                image: 'products/product-1.jpg', 
                title: 'Sweater', 
                subtitle: '', 
                quantity: 1,
                price: 211 
            },
            { 
                id: 2, 
                image: 'products/product-2.jpg', 
                title: 'Sweater', 
                subtitle: '', 
                quantity: 1,
                price: 211 
            },
            { 
                id: 3, 
                image: 'products/product-3.jpg', 
                title: 'Jacket', 
                subtitle: '', 
                quantity: 1,
                price: 211 
            },
            { 
                id: 4, 
                image: 'products/product-4.jpg', 
                title: 'Scarf', 
                subtitle: '',
                quantity: 1, 
                price: 211 
            },
            { 
                id: 5, 
                image: 'products/product-5.jpg', 
                title: 'Cape', 
                subtitle: '', 
                quantity: 1,
                price: 211 
            },
            { 
                id: 6, 
                image: 'products/product-6.jpg', 
                title: 'Sweet Sweater', 
                subtitle: '', 
                quantity: 1,
                price: 211 
            },
            { 
                id: 7, 
                image: 'products/product-7.jpg', 
                title: 'Backpack', 
                subtitle: '',
                quantity: 1, 
                price: 211 
            },
            { 
                id: 8, 
                image: 'products/product-8.jpg', 
                title: 'Jacket', 
                subtitle: '',
                quantity: 1, 
                price: 211 
            },
            // { 
            //     id: 9, 
            //     image: 'products/product-9.jpg', 
            //     title: 'Sneaker', 
            //     subtitle: '',
            //     quantity: 1, 
            //     price: 211 
            // },
            // { 
            //     id: 10, 
            //     image: 'products/product-10.jpg', 
            //     title: 'Sneaker', 
            //     subtitle: '',
            //     quantity: 1, 
            //     price: 211 
            // },
            // { 
            //     id: 11, 
            //     image: 'products/product-11.jpg', 
            //     title: 'Sneaker', 
            //     subtitle: '',
            //     quantity: 1, 
            //     price: 211 
            // },
            // { 
            //     id: 12, 
            //     image: 'products/product-12.jpg', 
            //     title: 'Jacket', 
            //     subtitle: '',
            //     quantity: 1, 
            //     price: 211 
            // },
            // { 
            //     id: 13, 
            //     image: 'products/product-13.jpg', 
            //     title: 'Sweater', 
            //     subtitle: '',
            //     quantity: 1, 
            //     price: 211 
            // },
            // { 
            //     id: 14, 
            //     image: 'products/product-14.jpg', 
            //     title: 'Cape', 
            //     subtitle: '',
            //     quantity: 1, 
            //     price: 211 
            // },
        ],
        cart: [],
    },
    getters: {
        products: state => state.products,
        cart: state => state.cart,
        user: state => state.user,
    },
    mutations: {
        ADD_TO_CART(state, product){
            let item = state.cart.find(i => i.id === product.id);
            if(item) {
                item.quantity++
            } else {
                state.cart.push(product);
            }
        },
        INCREASE_QUANTITY(state, productId){
            const cartId = state.cart.findIndex(
                i => i.id === productId
            );

            if(cartId >= 0){
                state.cart[cartId].quantity++;
            }
        },
        DECREASE_QUANTITY(state, productId){
            const cartId = state.cart.findIndex(
                i => i.id === productId
            );

            if(cartId >= 0){
                state.cart[cartId].quantity--;
            }

            if(state.cart[cartId].quantity <= 0){
                state.cart.splice(cartId, 1)
            }
        },
        REMOVE_FROM_CART(state, productId){
            const cartId = state.cart.findIndex(
                i => i.id === productId
            );
            if(cartId >= 0){
                state.cart.splice(cartId, 1);
            }
        },
        CLEAR_ALL(state){
            state.cart = [];
        },
    },
    actions: {
        addToCart(context, product) {
            context.commit('ADD_TO_CART', product);
        },
        increaseQuantity(context, productId){
            context.commit('INCREASE_QUANTITY', productId);
        },
        decreaseQuantity(context, productId){
            context.commit('DECREASE_QUANTITY', productId);
        },
        removeFromCart(context, productId) {
            context.commit('REMOVE_FROM_CART', productId);
        },
        clearAll(context){
            context.commit('CLEAR_ALL');
        }
    }
});
