<script setup>

const props = defineProps({verb: String});

</script>

<template>
  <h2>Изучаем неправильные глаголы</h2>  
  <h3>Введите имя глагола: {{props.verb}}</h3>
</template>

<style>
  /* h1 {
  font-weight: 500;
  line-height: 1.45;
  font-size: 1.8rem;
  font-weight: 700;
  } */
</style>