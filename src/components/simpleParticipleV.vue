<script setup>
  const props = defineProps({simpleParticiple: String})
</script>

<template>
<div>
 Simple Participle: &nbsp;&nbsp;
 <input
 type="text"
 id="sParticiple"
 placeholder="простое причастие"/>
 &nbsp; {{props.simpleParticiple}}
</div>
</template>

<style scoped>
 
</style>