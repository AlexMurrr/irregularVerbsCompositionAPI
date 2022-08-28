<script setup>
import {onBeforeMount} from 'vue'; 
import h1V from './h1V.vue';
import {useStoreVerbs} from '../stores/verbs';
import {storeToRefs} from 'pinia';
import {ref} from 'vue'
import formVerb from './formVerb.vue'
import numberPoints from './numberPoints.vue'

const storeVerbs = useStoreVerbs();
const {rendArrFromVerbForms} = storeToRefs(storeVerbs);
const {rendomNumFromVerbs} = storeVerbs;

onBeforeMount(() => {
      rendomNumFromVerbs();
    });

</script>

<template>
  <h1V :verb=rendArrFromVerbForms[0] />
<form-verb
  :translateTrue=rendArrFromVerbForms[1]
  :pastSimpleTrue=rendArrFromVerbForms[2]
  :partizipleTrue=rendArrFromVerbForms[3]
/>

<number-points/>

<h3>{{rendArrFromVerbForms}}</h3> 


</template>

<style>
  
</style>