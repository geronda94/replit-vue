<script setup>
import DraverHead from "./DraverHead.vue";
import CartList from "../Cart/CartList.vue";
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-10">
    <div class="bg-white absolute h-full w-96 right-0 top-0 z-20 p-8">
      <DraverHead />
      <CartList />

      <div class="flex flex-col gap-5 mt-5">
        <div class="flex gap-2">
          <span>Итого:</span>
          <div class="flex-1 border-b border-slate-200 border-dashed"></div>
          <b>25 000 руб.</b>
        </div>
        <div class="flex gap-2">
          <span>Налог 5%:</span>
          <div class="flex-1 border-b border-slate-200 border-dashed"></div>
          <b>320 руб.</b>
        </div>

        <button
          class="bg-lime-500 py-3 rounded-xl w-full text-white hover:bg-lime-600 transition active:bg-lime-700 disabled:bg-slate-400 cursor-pointer mt-4"
          @click="() => emit('createOrder')"
          :disabled="buttonDisabled"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
