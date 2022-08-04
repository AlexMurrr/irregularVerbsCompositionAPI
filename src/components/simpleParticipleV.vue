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
  div{
  font-weight: 400;
  line-height: 1.45;
  font-size: 1.6rem;
  font-weight: 700;
  }
</style>