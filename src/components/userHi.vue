<script setup>
import { ref } from "@vue/reactivity";
import {useStoreVerbs} from '../stores/verbs';
import {storeToRefs} from 'pinia';


const useStore =useStoreVerbs();

const {getUser, getTime} = useStore;

getUser();
getTime();

const {user, time} = storeToRefs(useStore)

</script>
    
<template>
    <div class="nameHi">
        <h2 class="header2">HI {{time}}</h2>
    </div>

</template>
    
<style scoped>
    .nameHi{
        color: #49428d;
    }
    .header2{
        text-align: left;
        margin-top: 1px;
        
    }
</style>