<script setup>
  const props = defineProps({simplePast: String});
</script>

<template>
<div>
  Simple Past: &nbsp;&nbsp;
  <input type="text" 
   id="sPast" 
   placeholder="простое прошедшее" />
   &nbsp; {{simplePast}}
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