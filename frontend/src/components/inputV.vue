<script setup>
    const emit = defineEmits(['update:value']);
    const props = defineProps({
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
    </div>
  </template>

<style>
    .input {
  width: 450px;
  margin: 20px auto;
}
</style>