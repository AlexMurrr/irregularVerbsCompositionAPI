<script setup>
import verbRendom from "./components/verbRendom.vue";
</script>

<template>
  <main>
    <verbRendom />
  </main>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 800px;
  background-color: rgb(232, 232, 248);
}
body {
  background-color: rgb(243, 240, 240);
}
input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 15px;
}
button {
  background-color: rgb(224, 231, 231);
}
</style>
