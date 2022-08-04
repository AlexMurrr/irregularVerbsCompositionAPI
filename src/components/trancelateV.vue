<script setup>
  const props = defineProps({translate: String});
</script>

<template>
<div>
  Translate: &nbsp;&nbsp;
  <input type="text" 
   id="translate" 
   placeholder="перевод" autofocus />   
    &nbsp; {{props.translate}}
</div>

</template>

<style scoped>
  div{
  font-weight: 400;
  line-height: 1.45;
  font-size: 1.6rem;
  font-weight: 700;
  }
</style>