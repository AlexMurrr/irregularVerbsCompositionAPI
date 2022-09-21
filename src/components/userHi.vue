<script setup>
import { ref } from "@vue/reactivity";
import {useStoreVerbs} from '../stores/verbs';
import {storeToRefs} from 'pinia';


const useStore =useStoreVerbs();


const {name} = storeToRefs(useStore)

</script>
    
<template>
    <div>
        {{name}}
    </div>

</template>
    
<style scoped>


</style>