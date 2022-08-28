<script setup>
import {useStoreVerbs} from '../stores/verbs';
import {storeToRefs} from 'pinia';
import { ref } from "@vue/reactivity";

const storeVerbs = useStoreVerbs();
const {numPoints} = storeToRefs(storeVerbs)

</script>
    
<template>
    <div class="point">
        <div class="amount">
        Points: <h2 class="h2"> {{numPoints}}</h2>
        </div>
    </div>
</template>
    
<style scoped>
    .point{
    background-color: rgb(243, 243, 250);
    border: 3px solid rgb(31, 30, 30);
    font-size: 25px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    border: 5px; 
    margin: 10px;   
    display: flex;
  }
    .amount{
      margin: auto;
    }
    .h2{
      margin: 6px;  
    }
</style>