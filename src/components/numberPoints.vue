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
        Points: <h2 class="h1"> {{numPoints}}</h2>
        </div>
    </div>
</template>
    
<style scoped>
    .point{
    background-color: rgb(243, 243, 250);
    border: 3px solid rgb(31, 30, 30);
    font-size: 20px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    border: 5px; 
    margin: 10px;   
    display: flex;
  }
    .amount{
      margin: auto;
    }
    .h1{
      margin: 6px;  
      color: #9e9393;
      font-size: 30px;
    }
</style>