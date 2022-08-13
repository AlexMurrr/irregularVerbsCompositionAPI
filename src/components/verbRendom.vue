<script setup>
import {onBeforeMount} from 'vue'; 
import h1V from './h1V.vue';
import trancelate from './trancelateV.vue';
import simplePast from './simplePastV.vue';
import simpleParticiple from './simpleParticipleV.vue';
import {useStoreVerbs} from '../stores/verbs';
import {storeToRefs} from 'pinia';
import {ref} from 'vue'

const storeVerbs = useStoreVerbs();
const {rendArrFromVerbForms} = storeToRefs(storeVerbs);
const {rendomNumFromVerbs} = storeVerbs;

onBeforeMount(() => {
      rendomNumFromVerbs();
    });

const isVisibleBtn = ref(false); 

function visibleBtnTofalse(){
  isVisibleBtn.value = false;
}
function visibleBtnToTrue(){
  isVisibleBtn.value = true;
}
    
</script>

<template>
  <h1V :verb=rendArrFromVerbForms[0] />
  <trancelate class="inputVerb" 
              :translate=rendArrFromVerbForms[1]
               />
  <simplePast class="inputVerb" 
              :simplePast=rendArrFromVerbForms[2]
               />
  <simpleParticiple class="inputVerb" 
                    :simpleParticiple=rendArrFromVerbForms[3]
                     />

<button  v-if="isVisibleBtn"  @click="rendomNumFromVerbs();
                                      visibleBtnTofalse();                   
                                     "
>next</button>
<button v-else @click="visibleBtnToTrue()
                       
                      "
>check</button>


<h3>{{rendArrFromVerbForms}} and {{isVisibleBtn}}</h3> 

</template>

<style>
  .inputVerb{
  font-weight: 400;
  line-height: 1.45;
  font-size: 1.6rem;
  font-weight: 700;
  }
</style>