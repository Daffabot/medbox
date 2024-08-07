<template>
    <HomePage />
    <router-view/>
</template>

<script>
import HomePage from '../components/HomePage.vue';

export default {
    components: {
        HomePage
    }
}
</script>

<style scoped>
@import '../assets/styles/home.css';
</style>