<script setup>

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
    <ver/>
  </main>

</template>

<style>

</style>
