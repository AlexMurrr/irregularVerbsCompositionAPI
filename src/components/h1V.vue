<script setup>
import numberPoints from './numberPoints.vue'

const props = defineProps({verb: String});

</script>

<template>

<div class="divHader"> 

  <div class="stealth">
  </div>
  <div class="hader">
    <h2>Изучаем неправильные глаголы</h2>  
    <h3>Введите для глагола: {{props.verb}}</h3>
  </div>

  <div>
    <number-points class="point"/>    
  </div>
  
</div>

</template>

<style>
.divHader{
  display: flex;
}
.stealth{
  width: 200px; 
}
.hader{
  margin-right: 50px;
}

</style>