<template>
    <AboutPage />
    <router-view/>
</template>

<script>
import AboutPage from '../components/AboutPage.vue'

export default {
    components: {
        AboutPage
    }
}
</script>

<style scoped>
@import '../assets/styles/about.css';
</style>