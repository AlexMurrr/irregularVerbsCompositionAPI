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
      <p class="p" v-html="resultTranslate"></p>
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
      <p class="p" v-html="resultSimplePast"></p>
      <!-- eslint-enable -->

      <label class="label"><strong> Simple Participle:</strong></label> <br />
      <input
        v-model="partiziple"
        required
        type="text"
        class="input"
        placeholder="Введите простое причастие"
      />
      <!-- eslint-disable -->
      <p class="p" v-html="resultSimpleParticiple"></p>
      <!-- eslint-enable -->

      <buttonV
        v-if="isTrue"
        class="btn"
        type="submit"
        label="Start"
        @click="(isTrue = !isTrue), callAsyncFunToStart()"
      />
        <!-- Start
      </button> -->

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
.btn {
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  display: block;
  width: 130px;
  font-weight: bold;
  margin: auto;
  text-align: center;
  padding: 7px 5px;
  color: #717171;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
  -webkit-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
  background: #f6f6f6;
  background: -webkit-linear-gradient(#f6f6f6, #d4d4d4);
  background-image: -moz-linear-gradient(top, #f6f6f6, #d4d4d4);
  background-image: -moz-gradient(top, #f6f6f6, #d4d4d4);
  border: 1px solid #a1a1a1;
}
.btn:hover {
  background: #f6f6f6;
  background: -webkit-linear-gradient(#f6f6f6, #ececec);
  background-image: -moz-linear-gradient(top, #f6f6f6, #ececec);
  background-image: -moz-gradient(top, #f6f6f6, #ececec);
}
</style>
