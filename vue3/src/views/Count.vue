<script setup>
import { ref } from "vue";
import Count from "../components/Count.vue";

let count = ref(5);

const countPlus = () => {
  count.value += 1;
};

const countMinus = () => {
  count.value -= 1;
};


</script>

<template>
  <Count 
  :count="count"
  :plus-func="countPlus"
  :minus-func="countMinus"
  v-model:inputValue="count"
  />
</template>