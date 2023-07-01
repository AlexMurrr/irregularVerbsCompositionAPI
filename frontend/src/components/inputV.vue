<script setup>
    const emit = defineEmits(['update:value']);
    const props = defineProps({
        errorTranslate: {
            type: Array,
            required: false
        },

        errorPastSimple: {
            type: Array,
            required: false
        },

        errorPartiziple: {
            type: Array,
            required: false
        },

        value: {
            type: String,
            default: '',            
        },
        name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            required: true,
        },
       
    });

const updateValue = (e) => {
    emit('update:value', e.target.value)
}    

</script>

<template>
    <div>
      <input 
      class="input"
      :value=value
      :name=name
      :type=type
      :placeholder=placeholder
      @input="updateValue"
      >
    <div class="form-error"
    v-for="element of errorTranslate"
    :key="element.$uid"
    >
    <div class="errMessage">{{ element.$message }}</div>        
    </div>          
    <div class="form-error"
    v-for="element of errorPastSimple"
    :key="element.$uid"
    >
    <div class="errMessage">{{ element.$message }}</div>        
    </div>  
    <div class="form-error"
    v-for="element of errorPartiziple"
    :key="element.$uid"
    >
    <div class="errMessage">{{ element.$message }}</div>        
    </div>  
    </div>        
  </template>

<style>
  .input {
  width: 450px;
  margin: 20px auto;
}
.errMessage{
    color: red;
}
</style>