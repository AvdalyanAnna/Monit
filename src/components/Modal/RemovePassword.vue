<template>
  <Modal>
      <div class="rek__title">Забыли пароль?</div>
      <div class="rek__descript">На ваш почтовый адрес, указанный при регистрации, высланы дальнейшие инструкции.</div>
  </Modal>
</template>

<script>
import Modal from "@/components/Ui/Modal";
import openModal from "@/mixin/openModal";

export default {
  name: "RemovePassword",
  components: {Modal},
  mixins: [openModal],

}
</script>

<style scoped>

</style>