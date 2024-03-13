<script setup>
    const props = defineProps({
        
    })
</script>

<template>
    <div class="border border-slate-100 py-2  px-2 grid grid-cols-10 rounded-xl relative
      items-center ">
        <img src="/sneakers/sneakers-5.jpg" alt="product image " class="col-span-3 cart__item-image">

        <div class="cart__item-info flex col-span-6 flex-col justify-between gap-1 px-2">
            <p class="text-base">Кроссовки Puma </p>
            <p class=" text-lg justify-self-end"><b> 25 000руб.</b></p>

        </div>


        <img @click="onClickRemove" src="/close.svg" class="
        opacity-50 hover:opacity-100  self-end cursor-pointer close__icon col-span-1">


    </div>
</template>




<style scoped>

</style>