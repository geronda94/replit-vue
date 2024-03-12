<script setup>
import DraverHead from "./DraverHead.vue";
import CartList from "../Cart/CartList.vue";
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-10">
    <div class="bg-white absolute h-full w-96 right-0 top-0 z-20 p-8">
      <DraverHead />
      <CartList />
    </div>
  </div>
</template>

<style scoped></style>
