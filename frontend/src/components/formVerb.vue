<script setup>
import { ref,computed } from "vue";
import { useStoreVerbs } from "../stores/verbs";
import { storeCheckVerbs } from "../stores/checkVerbs";
import { storeToRefs } from "pinia";
import  buttonV from "./buttonV.vue";
import inputV from "./inputV.vue";
import useVuelidate from "@vuelidate/core";
import {minLength} from "@vuelidate/validators";

const storeVerbs = useStoreVerbs();

const useStoreCheckVerbs = storeCheckVerbs();

const { rendomNumFromVerbs} = storeVerbs;

const { rendArrFromVerbForms} = storeToRefs(storeVerbs);

const { checkTranslate, checkPastSimple, checkPastParticiple, resetValue } =
  useStoreCheckVerbs;

const {
  resultTranslate,
  resultSimplePast,
  resultSimpleParticiple,
  translateTrueCheck,
  simplePastTrueCheck,
  simpleParticipleTrueCheck,
} = storeToRefs(useStoreCheckVerbs);

const props = defineProps({
  translateTrue: {type: String, default: ''},
  pastSimpleTrue: {type: String, default: ''},
  partizipleTrue: {type: String, default: ''},
});

const tranclate = ref("");
const pastSimple = ref("");
const partiziple = ref("");

//const isInputEmpty = ref("");

let isTrue = ref(false);
//let isTrueBV = ref(true);

async function resetValueInput() {
  tranclate.value = "";
  pastSimple.value = "";
  partiziple.value = "";
}

async function getValueFormVerbs() {
  translateTrueCheck.value = rendArrFromVerbForms.value[1];
  simplePastTrueCheck.value = rendArrFromVerbForms.value[2];
  simpleParticipleTrueCheck.value = rendArrFromVerbForms.value[3];
}

async function callAsyncFunToStart() {
  await rendomNumFromVerbs();
  await resetValue();
  await resetValueInput();
  await getValueFormVerbs();
}

const rules = computed(()=>({
  tranclate: {
    minLength: minLength(3)
  },
  pastSimple: {
    minLength: minLength(3)
  },
  partiziple: {
    minLength: minLength(3)
  },
}))

const validate = useVuelidate(rules, {tranclate, pastSimple, partiziple});

</script>

<template>
  {{ translateTrue }} {{ props.pastSimpleTrue }} {{ partizipleTrue }}
  <div>
    <form @submit.prevent="submit">
      <label class="label"><strong>Translate:</strong></label> <br />

      <inputV
      v-model:value="validate.tranclate.$model"
      :errorTranslate="validate.tranclate.$errors"
      placeholder="Введите перевод"
      name='tranclate'
      />
      
      <!-- eslint-disable -->
      <p v-html="resultTranslate"></p>
      <!-- eslint-enable -->

      <label class="label"><strong>Simple Past:</strong></label> <br />
     
      <inputV     
      v-model:value="validate.pastSimple.$model"  
      :errorPastSimple="validate.pastSimple.$errors"    
      placeholder="Введите простое прошедшее"
      name='pastSimple'
      />
      
      <!-- eslint-disable -->
      <p v-html="resultSimplePast"></p>
      <!-- eslint-enable -->

      <label class="label"><strong> Simple Participle:</strong></label> <br/>

      <inputV
      v-model:value="validate.partiziple.$model"
      :errorPastSimple = "validate.partiziple.$errors"
      placeholder="Введите простое причастие"
      name='partiziple'
      /> 

      <!-- eslint-disable -->
      <p v-html="resultSimpleParticiple"></p>
      <!-- eslint-enable -->

      <buttonV
        v-if="isTrue"
        class="btn"
        type="submit"
        label="Start"
        @click="(isTrue = !isTrue), callAsyncFunToStart()"
      />
      
      <buttonV
        v-else
        class="btn"
        type="submit"
        label="Check"
        @click="
          (isTrue = !isTrue), 
          checkTranslate(tranclate, translateTrue);
          checkPastSimple(pastSimple, pastSimpleTrue);
          checkPastParticiple(partiziple, partizipleTrue);"
      />      
      <hr />    
    </form>
  </div>
</template>

<style scoped>
.label {
  color: #17173f;
}

</style>
