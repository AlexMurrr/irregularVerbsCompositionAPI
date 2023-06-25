<script setup>
    const props = defineProps({
        label: {
            type: String,
            default: 'Button',
        }
    })
</script>

<template>
  <div>
    <button class="btn">{{label}}</button>      
  </div>
</template>

<style scoped>
.btn{
    font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  display: block;
  width: 130px;
  font-weight: bold;
  margin: auto;
  text-align: center;
  padding: 7px 5px;
  color: #717171;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
  -webkit-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2),
    inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
  background: #f6f6f6;
  background: -webkit-linear-gradient(#f6f6f6, #d4d4d4);
  background-image: -moz-linear-gradient(top, #f6f6f6, #d4d4d4);
  background-image: -moz-gradient(top, #f6f6f6, #d4d4d4);
  border: 1px solid #a1a1a1;   
}
.btn:hover {
  background: #f6f6f6;
  background: -webkit-linear-gradient(#f6f6f6, #ececec);
  background-image: -moz-linear-gradient(top, #f6f6f6, #ececec);
  background-image: -moz-gradient(top, #f6f6f6, #ececec);
}
</style>
