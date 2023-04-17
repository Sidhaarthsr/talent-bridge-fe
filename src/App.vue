<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';

console.log(process.env.BASE_URL)
</script>

<style>
@import url('./assets/style.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  max-height: 100%;
}
</style>
