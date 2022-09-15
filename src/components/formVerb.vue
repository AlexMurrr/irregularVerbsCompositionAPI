<script setup>
import { ref } from "@vue/reactivity";
import {useStoreVerbs} from '../stores/verbs';
import {storeToRefs} from 'pinia';


const storeVerbs = useStoreVerbs();
const {rendomNumFromVerbs, checkTranslate, checkPastSimple, 
      checkPastParticiple, resetValue, removeEmptySpace} = storeVerbs;

const rendVerb = rendomNumFromVerbs;
const check = checkTranslate;
const past = checkPastSimple;
const participle = checkPastParticiple;
const resetVaueRes = resetValue;

const {translateStore, pastSimpleStore, pastParticipleStore, resultTranslate,
       resultSimplePast, resultSimpleParticiple, r} = storeToRefs(storeVerbs)

const props = defineProps({translateTrue: String,
                           pastSimpleTrue: String,
                           partizipleTrue: String,
                           });

const tranclate = ref('');
const pastSimple = ref('');
const partiziple = ref('');

const isInputEmpty = ref('');

let isTrue = ref(false);

function resetValueInput(){
  tranclate.value = '';
  pastSimple.value = '';
  partiziple.value = '';
}

function inputNotVoid(){
  if(tranclate.value ==='' || pastSimple.value === '' || partiziple.value === ''){
  alert('Есть незаполненные поля!');
  return false;
}else 
  return true;   
}

function checkMethods(){
    isTrue=!isTrue;             
    check(removeEmptySpace(tranclate),removeEmptySpace(translateTrue));
    past(removeEmptySpace(pastSimple), removeEmptySpace(pastSimpleTrue));
    participle(removeEmptySpace(partiziple), removeEmptySpace(partizipleTrue));
}
</script>
    
<template>
    <div>
{{props.translateTrue}} {{props.pastSimpleTrue}} {{partizipleTrue}}
    <form @submit.prevent="submit"> 

    <label for="tr" class="label"><strong>Translate:</strong></label> <br/>
    <input required type="text" 
    class="input"
    placeholder="Введите перевод"    
    v-model="tranclate">
    <p class="p" v-html="resultTranslate"></p>
    <br/>

    <label for="tr" class="label"><strong>Simple Past:</strong></label> <br/>
    <input required  type="text"
    class="input"
    placeholder="Введите простое прошедшее" 
    v-model="pastSimple">
    <p class="p" v-html="resultSimplePast"></p>
    <br/>

    <label for="tr" class="label"><strong> Simple Participle:</strong></label> <br/>
    <input required  type="text" 
    class="input"
    placeholder="Введите простое причастие" 
    v-model="partiziple">
    <p class="p" v-html="resultSimpleParticiple"></p>
      <br/>
    <button type="submit" v-if="isTrue" @click="isTrue=!isTrue,
                                                rendVerb(),
                                                resetVaueRes(),
                                                resetValueInput()"
                                                >Start</button>
                                                
    <button type="submit" v-else @click=" isTrue=!isTrue;             
          check(removeEmptySpace(tranclate),removeEmptySpace(translateTrue));
          past(removeEmptySpace(pastSimple), removeEmptySpace(pastSimpleTrue));
          participle(removeEmptySpace(partiziple), removeEmptySpace(partizipleTrue));
                                        ">Check</button>    
    <hr>
     </form>      
    </div>    
</template>
    
<style scoped>

.input{
  width: 450px;
  margin: 15px auto;
}
.label{
  color: #17173f;
  
}
</style>