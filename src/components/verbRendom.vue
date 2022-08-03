<script>
import h1V from './h1V.vue'

export default{

  data(){
    return{
      
    }
  },
  computed:{
    rendomNumFromVerbs (){
        return Math.floor(Math.random() * Object.keys(this.verbForms).length)
    }
  }
  
}


</script>

<template>
    <div>
       
    </div>
</template>

 <style>
 
</style>