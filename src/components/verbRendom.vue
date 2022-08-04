<script setup>

import h1V from './h1V.vue'
import trancelate from './trancelateV.vue'
import simplePast from './simplePastV.vue'
import simpleParticiple from './simpleParticipleV.vue'
import {useStoreVerbs} from '../stores/verbs'
 import {mapActions, storeToRefs} from 'pinia'  

const storeVerbs = useStoreVerbs();
const {rendArrFromVerbForms} = storeToRefs(storeVerbs);
const {rendomNumFromVerbs} = storeVerbs;
    
</script>

<template>
  <h1V/>
  <trancelate/>
  <simplePast/>
  <simpleParticiple/>

  <button @click="rendomNumFromVerbs">random</button>
<h3>{{indexverb}}</h3>
<h3>{{rendArrFromVerbForms}}</h3>

  <main>        
  </main>

</template>

<style>

</style>