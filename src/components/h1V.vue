<script setup>

const props = defineProps({verb: String});

</script>

<template>
  <h1>Изучаем неправильные глаголы</h1>  
  <h2>Введите имя глагола: {{props.verb}}</h2>
</template>

<style>
  h1 {
  font-weight: 500;
  line-height: 1.45;
  font-size: 1.8rem;
  font-weight: 700;
  }
</style>