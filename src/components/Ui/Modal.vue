<template>
  <div class="modal__bg">
    <div class="modal__window">
      <button @click="closeModals" id="clode__btn"></button>
      <label for="clode__btn">
        <img src="@/assets/img/close.svg" alt="close1" class="close">
      </label>

      <div class="modal__header">
        <slot name="header">
        </slot>
      </div>

      <hr v-if="withGoogle" class="modal__line">

      <button v-if="withGoogle" class="google">
        <img src="@/assets/img/google.png" alt="google" class="goog">
        Войти с помощью Google
      </button>

      <slot/>
    </div>
  </div>
</template>

<script>
import openModal from "@/mixin/openModal";

export default {
  name: "Modal",
  mixins: [openModal],
  props: {
    withGoogle: {
      type: Boolean,
      default: false

    }
  }
}
</script>