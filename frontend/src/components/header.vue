<script setup>
import numberPoints from "./numberPoints.vue";
import userHi from "./userHi.vue";

const props = defineProps({ verb: String });
</script>

<template>
  <div class="divHader">
    <div class="hi">
      <user-hi />
    </div>
    <div class="hader">
      <h2>Изучаем неправильные глаголы</h2>
      <h3>Введите для глагола: {{ props.verb }}</h3>
    </div>

    <div class="point" >
      <number-points/>
    </div>
  </div>
</template>

<style>
.divHader {
  display: flex;
}
.hi {
  margin-top: 35px;
  margin-left: 10px;
  width: 200px;
}
.hader {
  margin-right: 60px;
}
.point{
  margin-top: 10px;
}
</style>
