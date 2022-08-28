<script setup>
import numberPoints from './numberPoints.vue'

const props = defineProps({verb: String});

</script>

<template>
  <h2>Изучаем неправильные глаголы</h2>  
  <h3>Введите для глагола: {{props.verb}}</h3>
  <number-points class="point"/>
</template>

<style>
  .point{
  position: absolute;
  top: 40px; 
  left: 850px;  
}
</style>