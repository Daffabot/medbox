<template>
    <HomePage />
</template>

<script>
export default {
    components: {
        HomePage: () => import('../components/HomePage.vue')
    }
}
</script>