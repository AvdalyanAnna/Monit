<template>
  <div class="input__item">
    <div class="input__title">{{ inputTitle }}</div>
    <input :type="inputType"
           :class="inputClass"
           :placeholder="inputPlaceholder"
           @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: "InputItem",
  props:{
    inputTitle:{
      type:String,
    },
    inputPlaceholder:{
      type:String,
    },
    inputType:{
      type:String,
      default:'text'
    },
    inputClass:{
      type:String,
    }
  }
}
</script>

<style scoped>

</style>