<script setup>
import { ref } from "vue";
import { useStoreVerbs } from "../stores/verbs";
import { storeCheckVerbs } from "../stores/checkVerbs";
import { storeToRefs } from "pinia";
import  buttonV from "./buttonV.vue";

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

</script>

<template>
  {{ translateTrue }} {{ props.pastSimpleTrue }} {{ partizipleTrue }}
  <div>
    <form @submit.prevent="submit">
      <label class="label"><strong>Translate:</strong></label> <br />
      <input
        v-model="tranclate"
        type="text"
        class="input"
        placeholder="Введите перевод"
        required
      />
      <!-- eslint-disable -->
      <p v-html="resultTranslate"></p>
      <!-- eslint-enable -->

      <label class="label"><strong>Simple Past:</strong></label> <br />
      <input
        v-model="pastSimple"
        required
        type="text"
        class="input"
        placeholder="Введите простое прошедшее"
      />
      <!-- eslint-disable -->
      <p v-html="resultSimplePast"></p>
      <!-- eslint-enable -->

      <label class="label"><strong> Simple Participle:</strong></label> <br/>
      <input
        v-model="partiziple"
        required
        type="text"
        class="input"
        placeholder="Введите простое причастие"
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
.input {
  width: 450px;
  margin: 20px auto;
}
.label {
  color: #17173f;
}

</style>
