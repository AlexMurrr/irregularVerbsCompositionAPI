<script setup>
import { ref } from "@vue/reactivity";
import {useStoreVerbs} from '../stores/verbs';
import {storeCheckVerbs} from '../stores/checkVerbs'
import {storeToRefs} from 'pinia';


const storeVerbs = useStoreVerbs();
const useStoreCheckVerbs = storeCheckVerbs();

const {rendomNumFromVerbs} = storeVerbs;
const {checkTranslate, checkPastSimple, resetValue} = useStoreCheckVerbs;
      
// const {translateStore, pastSimpleStore, pastParticipleStore, resultTranslate,
//        resultSimplePast, resultSimpleParticiple} = storeToRefs(storeVerbs)

const {translateStore, resultTranslate, resultSimplePast} = storeToRefs(useStoreCheckVerbs);

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

</script>
    
<template>
    <div>
{{props.translateTrue}} {{props.pastSimpleTrue}} {{partizipleTrue}} 
    <form @submit.prevent="submit"> 
    <label for="tr" class="label"><strong>Translate:</strong></label> <br/>
    <input type="text" 
    class="input"
    placeholder="Введите перевод"    
    v-model="tranclate" required>
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
    <!-- <p class="p" v-html="resultSimpleParticiple"></p> -->
      <br/>
    <button class="btn" type="submit" v-if="isTrue" @click="isTrue=!isTrue,
                                               rendomNumFromVerbs(),
                                                resetValue(),
                                                resetValueInput()"
                                                >Start</button>
                                                
    <button class="btn" type="submit" v-else @click=" isTrue=!isTrue;             
          checkTranslate(tranclate,translateTrue);
          checkPastSimple(pastSimple,pastSimpleTrue);
          // checkPastParticiple(partiziple,partizipleTrue);        
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
.btn{
  font-size: 18px;
    text-decoration: none;
    cursor: pointer;
    display:block;
        width:130px;
    font-weight: bold;
    margin: auto;
        text-align:center;
    padding: 7px 5px;
    color: #717171;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
    -webkit-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
    background: #f6f6f6;    
    background: -webkit-linear-gradient(#f6f6f6, #d4d4d4);
    background-image: -moz-linear-gradient(top, #f6f6f6, #d4d4d4);
    background-image: -moz-gradient(top, #f6f6f6, #d4d4d4);
    border: 1px solid #a1a1a1;
}
.btn:hover{
   background: #f6f6f6;    
    background: -webkit-linear-gradient(#f6f6f6, #ececec);
    background-image: -moz-linear-gradient(top, #f6f6f6, #ececec);
    background-image: -moz-gradient(top, #f6f6f6, #ececec);
}
</style>