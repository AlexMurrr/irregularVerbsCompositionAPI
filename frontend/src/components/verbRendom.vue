<script setup>
import {onBeforeMount} from 'vue'; 
import headerUse from './header.vue';
import {useStoreVerbs} from '../stores/verbs';
import {storeCheckVerbs} from '../stores/checkVerbs';
import {storeToRefs} from 'pinia';
import {ref} from 'vue'
import formVerb from './formVerb.vue'
import start from './start.vue'


const storeVerbs = useStoreVerbs();
const {rendArrFromVerbForms} = storeToRefs(storeVerbs);
const {rendomNumFromVerbs} = storeVerbs;
const {translateTrueCheck, simplePastTrueCheck, simpleParticipleTrueCheck} = storeToRefs(storeCheckVerbs());

const time = ref(0);

async function getValueFormVerbs(){
  translateTrueCheck.value = rendArrFromVerbForms.value[1];
  simplePastTrueCheck.value = rendArrFromVerbForms.value[2];
  simpleParticipleTrueCheck.value = rendArrFromVerbForms.value[3];   
}

async function callAsyncFun(){
  await rendomNumFromVerbs();
  await getValueFormVerbs();
}

function go (){
        time.value +=1;
        if(time.value === 4) {
          time.value ='Go!';
          callAsyncFun();           
        }         
      }   

function myLoop(){
        for(let i=0; i<4; i++){
          setTimeout(go, i*1000)       
      }  
    }        

onBeforeMount(() => {
      myLoop();
    });    

</script>

<template>
  <header-use 
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
 
