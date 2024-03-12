9
<script setup>
    let props = defineProps({
        id: Number,
        img: {
          type: String,
          default: "/sneakers/sneakers-1.jpg"
        },
        title: String,
        price: Number,
        isFavorite: {
          type: Boolean,
          default: false
        },
        isAdded: {
          type: Boolean,
          default: false
        },

        onClickAdd: Function,
        onClickFavorite: Function
})
</script>

<template>
  <div class="sneakers__card">
    <div
      class="relative border border-slate-100 rounded-2xl py-6 px-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition bg-white"
    >
      <img
        @click="onClickFavorite"
        :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
        class="absolute top-8 left-8"
        alt="Like 1"
      />
      <img :src="img" alt="Sneakers" />
      <p class="mt-2">{{ title }}</p>

      <div class="flex justify-between mt-5">
        <div class="flex flex-col">
          <span class="text-slate-400">Цена: </span>
          <b>{{ price }} руб.</b>
        </div>
        <div class="relative">
          <img
            @click="onClickAdd"
            :src="!isAdded ? '/plus.svg' : 'checked.svg'"
            alt="Plus"
            class="absolite top-8 left-8"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
