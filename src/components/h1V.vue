<script setup>
import numberPoints from './numberPoints.vue'

const props = defineProps({verb: String});

</script>

<template>

<div class="divHader">
  <div>
    <number-points class="point"/>
    </div>
  <div>
    <h2>Изучаем неправильные глаголы</h2>  
    <h3>Введите для глагола: {{props.verb}}</h3>
  </div>
</div>

</template>



<style>
  .point{
  position: absolute;
  top: 40px; 
  left: 950px;  
}
</style>