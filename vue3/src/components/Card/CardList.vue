9
<script setup>
import Card from "./Card.vue";

const onClickAdd = () => {
  alert("add");
};
</script>

<template>
  <div class="grid xl:grid-cols-4 lg:grid-cols-3 gap-5">
    <Card
      class=""
      :id="1"
      title="Мужские кроссовки Nike Blazer Mid Suede"
      img="/sneakers/sneakers-1.jpg"
      :price="15000"
      :onClickAdd="onClickAdd"
    /><Card
      class=""
      :id="2"
      title="Мужские кроссовки Nike Blazer Mid Suede"
      img="/sneakers/sneakers-3.jpg"
      :price="15000"
    />
    <Card
      class=""
      :id="3"
      title="Мужские кроссовки Nike Blazer Mid Suede"
      img="/sneakers/sneakers-2.jpg"
      :price="15000"
    />
    <Card
      class=""
      :id="3"
      title="Мужские кроссовки Nike Blazer Mid Suede"
      img="/sneakers/sneakers-6.jpg"
      :price="15000"
    />
    <Card
      class=""
      :id="3"
      title="Мужские кроссовки Nike Blazer Mid Suede"
      img="/sneakers/sneakers-7.jpg"
      :price="15000"
    />
  </div>
</template>

<style scoped></style>
