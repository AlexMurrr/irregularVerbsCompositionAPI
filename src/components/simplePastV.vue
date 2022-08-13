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
 
</style>