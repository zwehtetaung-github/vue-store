<template>
    <div class="login">
        <Login />
    </div>
</template>

<script>
import Login from '@/components/LoginComponent.vue';

export default {
    name: 'LoginView',
    components: {
        Login,
    },
}
</script>

<style>
.login {
    align-content: center;
}
</style>