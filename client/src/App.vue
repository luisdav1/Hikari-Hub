<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <NavBar/> 
    <RouterView/>
    <footer><Footer/></footer>
</template>

<style scoped>

</style>
