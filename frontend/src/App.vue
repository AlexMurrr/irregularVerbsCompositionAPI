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
  margin: 15px auto;
  width: 700px;
  background-color: rgb(218, 231, 240);
  border-radius: 2%;
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
