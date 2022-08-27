<script setup>
import { ref } from "@vue/reactivity";

const props = defineProps({translateTrue: String,
                           pastSimpleTrue: String,
                           partizipleTrue: String,
                           });

const tranclate = ref('');
const pastSimple = ref('');
const partiziple = ref('');

let isTrue =ref(true);

</script>
    
<template>
    <div>
{{props.translateTrue}} {{props.pastSimpleTrue}} {{partizipleTrue}}
    <form @submit.prevent="submit">

     <label for="tr">Translate:</label> <br/>
    <input type="text" placeholder="Введите перевод" id="tr" v-model="tranclate">
      <br/>
    <label for="tr">Simple Past:</label> <br/>
    <input type="text" placeholder="Введите простое прошедшее" v-model="pastSimple">
      <br/>
     <label for="tr"> Simple Participle:</label> <br/>
    <input type="text" placeholder="Введите простое причастие" v-model="partiziple">
      <br/>
    <button type="submit" v-if="isTrue" @click="isTrue=!isTrue">Start</button>
    <button type="submit" v-else @click="isTrue=true">Check</button>    
    <hr>
     </form> 

    </div>
</template>
    
<style scoped>
</style>