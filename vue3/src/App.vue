<script setup>
import Head from "./components/Header/Head.vue";
// import Carousel from "./components/Carousel/Carousel.vue";
import { ref } from "vue";
</script>

<template>
  <div class="bg-white w-11/12 m-auto h-auto min-h-screen my-16 rounded-2xl shadow-xl">
    
    <Head/>
    <router-view/>
  </div>
  
</template>

<style scoped></style>