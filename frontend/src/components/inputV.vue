<script setup>
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
        label: {
            type: String,
            required: true,
        },
    });
</script>

<template>
    <div>
      <input 
      class="input-text"
      :value=value
      :name=name
      :type=type
      :placeholder=placeholder
      >
      <label :for='name' class="input-label" >{{ label }}</label>     
    </div>
  </template>