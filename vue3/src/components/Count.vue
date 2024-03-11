<script setup>
import { ref } from "vue";

const props = defineProps({
  count: {
    type: Number,
    default: 0,
  },
  minusFunc: {
    type: Function,
    requirens: true,
  },
  plusFunc: {
    type: Function,
    requirens: true,
  },
  inputValue: {
    type: Number,
    requirens: false,
  },
});

const emit = defineEmits(["update:inputValue"]);

const inputCount = (event) => {
  const inputNumber = Number(event.target.value);
  emit("update:inputValue", inputNumber);
};
// const updateInput = (event) => {
//   count.value = event.target.value;
// };
</script>

<template>
  <h2>{{ count }}</h2>
  <div>
    <button @click="minusFunc">-1</button>
    <button @click="plusFunc">+1</button>
  </div>
  <!-- <input @input="updateInput" -->
  <input type="text" :value="inputValue" @input="inputCount" />
</template>

<style>
button {
  padding: 10px;
  border: 1px solid #ccc;
}
</style>