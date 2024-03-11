<script setup>

</script>

<template>
  <header class="flex justify-between px-4 py-6 border-b border-slate-300">
    
    <div class="head-title flex items-center gap-4 ">
      <img src="/logo.png" class="w-10 h-auto"/>
      <div class="mx-2">
        <h2 class='font-bold uppercase text-2xl'>
          Vue sneakers
        </h2>
        <p class="text-slate-500">
          Магзин лучших кросовок
        </p>
      </div>
      <<template>
  <nav class="flex justify-between px-4 py-6 border-b border-slate-300">
    <ul class="flex items-center gap-4 text-slate-300">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    background-color: #f0f0f0;
  }

  nav ul {
    list-style: none;
    display: flex;
  }

  nav a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }
</style>
    </div>

    <ul class="flex items-center gap-4 text-slate-300">
      <li>
        <img src="/cart.svg" />
        <b>1250 руб.</b>
      </li>
      <li>
        <img src="/heart.svg" />
        <b>Избранное</b>
      </li>
      <li>
        <img src="/profile.svg" />
        <b>Профиль</b>
      </li>
      
      
    </ul>
  </header>
</template>

<style scoped>
  .head-title{
    font-size:12px;
  }
  
</style>