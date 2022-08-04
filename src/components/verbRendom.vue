<script setup>

import h1V from './h1V.vue'
import trancelate from './trancelateV.vue'
import simplePast from './simplePastV.vue'
import simpleParticiple from './simpleParticipleV.vue'
import {useStoreVerbs} from '../stores/verbs'
import {storeToRefs} from 'pinia'  

const storeVerbs = useStoreVerbs();
const {rendArrFromVerbForms} = storeToRefs(storeVerbs);
const {rendomNumFromVerbs} = storeVerbs;


    
</script>

<template>
  <h1V :verb=rendArrFromVerbForms[0] />
  <trancelate :translate=rendArrFromVerbForms[1] />
  <simplePast :simplePast=rendArrFromVerbForms[2] />
  <simpleParticiple :simpleParticiple=rendArrFromVerbForms[3] />

<button @click="rendomNumFromVerbs">random</button>
<h3>{{rendArrFromVerbForms}}</h3> 

</template>

<style>

</style>