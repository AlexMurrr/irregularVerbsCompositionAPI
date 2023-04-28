<script setup>
import { ref } from "@vue/reactivity";
import {useStoreVerbs} from '../stores/verbs';
import {storeToRefs} from 'pinia';


const useStore =useStoreVerbs();

const {getRandomUser} = useStore;

getRandomUser();

const {rendUser} = storeToRefs(useStore)

</script>
    
<template>
    <div class="nameHi">
        <h3 class="header2">Hello,<br>  {{rendUser}} </h3>       
    </div>

</template>
    
<style scoped>
    .nameHi{
        color: #1c1844;
    }
    .header2{
        text-align: left;
        margin-top: 1px;
        
    }
</style>