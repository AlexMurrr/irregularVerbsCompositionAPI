<script setup>

import {ref, computed} from 'vue'

  const props = defineProps({translate: String});
  const interTranslation = ref('');
  const result = ref('');

  const child = ref();

  function compareTranslate(){
    if (interTranslation===props.translate){
      result.value = 'eeee'
    }
  }

 function doSomething(){
  console.log(1);
}

defineExpose({
  doSomething,
});


</script>

<template>
<div>
  Translate: &nbsp;&nbsp;
  <input
    v-model="interTranslation"
    type="text" 
    placeholder="перевод" autofocus
   />   
    &nbsp; {{props.translate}} &nbsp;{{result}}
</div>

</template>

<style scoped>
 
</style>