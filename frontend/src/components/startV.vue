<script setup>
const props = defineProps({ time: {type: Number, default: 0}});
</script>

<template>
  <div class="circle">
    <h1 class="time">{{ props.time }}</h1>
  </div>
</template>

<style scoped>
.circle {
  width: 100px;
  height: 100px;
  background: #afc0cf;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.time {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>
