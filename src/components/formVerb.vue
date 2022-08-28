<script setup>
import { ref } from "@vue/reactivity";
import {useStoreVerbs} from '../stores/verbs';
import {storeToRefs} from 'pinia';


const storeVerbs = useStoreVerbs();
const {rendomNumFromVerbs, checkTranslate, checkPastSimple, 
      checkPastParticiple, resetValue} = storeVerbs;

const rendVerb = rendomNumFromVerbs;
const check = checkTranslate;
const past = checkPastSimple;
const participle = checkPastParticiple;
const resetVaueRes = resetValue;

const {translateStore, pastSimpleStore, pastParticipleStore, resultTranslate,
       resultSimplePast, resultSimpleParticiple} = storeToRefs(storeVerbs)

const props = defineProps({translateTrue: String,
                           pastSimpleTrue: String,
                           partizipleTrue: String,
                           });

const tranclate = ref('');
const pastSimple = ref('');
const partiziple = ref('');

let isTrue = ref(false);

function resetValueInput(){
  tranclate.value = '';
  pastSimple.value = '';
  partiziple.value = '';
}

</script>
    
<template>
    <div>
{{props.translateTrue}} {{props.pastSimpleTrue}} {{partizipleTrue}}
    <form @submit.prevent="submit">

     <label for="tr"><strong>Translate:</strong></label> <br/>
    <input type="text" placeholder="Введите перевод" id="tr" v-model="tranclate">
    <p class="p" v-html="resultTranslate"></p>
    <br/>
    <label for="tr"><strong>Simple Past:</strong></label> <br/>
    <input type="text" placeholder="Введите простое прошедшее" v-model="pastSimple">
    <p class="p" v-html="resultSimplePast"></p>
      <br/>
     <label for="tr"><strong> Simple Participle:</strong></label> <br/>
    <input type="text" placeholder="Введите простое причастие" v-model="partiziple">
    <p class="p" v-html="resultSimplePast"></p>
      <br/>
    <button type="submit" v-if="isTrue" @click="isTrue=!isTrue,
                                                rendVerb(),
                                                resetVaueRes(),
                                                resetValueInput()"
                                                >Start</button>
    <button type="submit" v-else @click="isTrue=!isTrue,
                                         check(tranclate,translateTrue),
                                         past(pastSimple, pastSimpleTrue),
                                         participle(partiziple, partizipleTrue)
                                        "
                                        >Check</button>    
    <hr>
     </form>      
    </div>

    
    
</template>
    
<style scoped>
.p{
  margin: 10px;
} 
</style>