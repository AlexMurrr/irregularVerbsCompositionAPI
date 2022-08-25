<script setup>
import { ref } from "@vue/reactivity";


const tranclate = ref('');
const pastSimple = ref('');
const partiziple = ref('');

</script>
    
<template>
    <div>
    <form @submit.prevent="submit">
    <input type="text" placeholder="Введите перевод" v-model="tranclate">
    <input type="text" placeholder="Введите простое прошедшее" v-model="pastSimple">
    <input type="text" placeholder="Введите простое причастие" v-model="partiziple">
    <button type="submit" v-if="isTrue">Check</button>
    <button type="submit" v-else>show result</button>
    <hr>
     </form>
     {{tranclate}}
     {{pastSimple}}
     {{partiziple}}
    </div>
</template>
    
<style scoped>
</style>