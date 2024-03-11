9
<script setup>
import Card from "./Card.vue";
</script>

<template>
  <div class="flex">
    <Card
      class="w-1/4"
      :id="1"
      title="Мужские кроссовки Nike Blazer Mid Suede"
      img="/sneakers/sneakers-1.jpg"
      :price="15000"
    />
  </div>
</template>

<style scoped></style>
