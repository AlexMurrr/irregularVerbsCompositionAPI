<script setup>
   import h1V from './components/h1V.vue'
    import trancelate from "./components/trancelateV.vue"
    import simplePast from "./components/simplePastV.vue"
    import simpleParticiple from "./components/simpleParticipleV.vue"
    import ver from "./components/verbRendom.vue"
    import {useStore} from './stores/verbs'
    import {mapActions, storeToRefs} from 'pinia'


    const useStoreVerb = useStore();
    const {indexverb, rendArrFromVerbForms} = storeToRefs(useStoreVerb);
    const {rendomNumFromVerbs} = useStoreVerb;
</script>

<template>
<button @click="rendomNumFromVerbs">random</button>
<h3>{{indexverb}}</h3>
<h3>{{rendArrFromVerbForms}}</h3>
  <main>
    <h1V/>
    <trancelate/>
    <simplePast/>
    <simpleParticiple/>
    <ver/>
  </main>

</template>

<style>

</style>
