<script setup>
import {onBeforeMount} from 'vue'; 
import h1V from './h1V.vue';
import {useStoreVerbs} from '../stores/verbs';
import {storeToRefs} from 'pinia';
import {ref} from 'vue'
import formVerb from './formVerb.vue'
import start from './start.vue'



const storeVerbs = useStoreVerbs();
const {rendArrFromVerbForms} = storeToRefs(storeVerbs);
const {rendomNumFromVerbs} = storeVerbs;

const time = ref(0);

function go (){
        time.value +=1;
        if(time.value === 4) {
          time.value ='Go!';
          rendomNumFromVerbs();           
        }         
      }   

function myLoop(){
        for(let i=0; i<4; i++){
          setTimeout(go, i*1500)       
      }  
    }        

onBeforeMount(() => {
      myLoop();
    });

</script>

<template>
  <h1V 
  :verb=rendArrFromVerbForms[0] 
  />

<form-verb
  :translateTrue=rendArrFromVerbForms[1]
  :pastSimpleTrue=rendArrFromVerbForms[2]
  :partizipleTrue=rendArrFromVerbForms[3]

/>
<start 
  :time = time
/>
</template>

<style>
 
</style>