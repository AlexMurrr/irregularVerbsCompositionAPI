<script setup>
    const emit = defineEmits(['update:value']);
    const props = defineProps({
        errorTranslate: {
            type: Array,
            default: '',
            required: false
        },

        errorPastSimple: {
            type: Array,
            default: '',
            required: false
        },

        errorPartiziple: {
            type: Array,
            default: '',
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
    <div
v-for="element of errorTranslate"
    :key="element.$uid"
    class="form-error"
    >
    <div class="errMessage">{{ element.$message }}</div>        
    </div>          
    <div
v-for="element of errorPastSimple"
    :key="element.$uid"
    class="form-error"
    >
    <div class="errMessage">{{ element.$message }}</div>        
    </div>  
    <div
v-for="element of errorPartiziple"
    :key="element.$uid"
    class="form-error"
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