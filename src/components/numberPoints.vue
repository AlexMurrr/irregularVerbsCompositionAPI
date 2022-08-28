<script setup>
import {useStoreVerbs} from '../stores/verbs';
import {storeToRefs} from 'pinia';
import { ref } from "@vue/reactivity";

const storeVerbs = useStoreVerbs();
const {numPoints} = storeToRefs(storeVerbs)

</script>
    
<template>
    <div>
        <h3>{{numPoints}}</h3>
    </div>
</template>
    
<style scoped>
</style>