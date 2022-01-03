<template>
  <Modal withGoogle>
    <template slot="header">
      <h1 class="modal__title">Авторизация</h1>
      <button class="smen" @click="openRegistration">Регистрация</button>
    </template>
    <div class="modal__text">или с помощью e-mail:</div>
    <form action="">
      <InputItem input-title="E-mail" input-placeholder="Ваш e-mail" v-model="email" />
      <InputItem input-title="Пароль" input-type="password" input-placeholder="Ваш пароль" v-model="password" />
      <div class="zab" @click="openRemovePassword">Забыли пароль?</div>
      <div class="f_bt">
        <button type="submit" class="form__button reg__btn">Войти</button>
      </div>
    </form>
  </Modal>
</template>

<script>
import Modal from "@/components/Ui/Modal";
import openModal from "@/mixin/openModal";
import InputItem from "@/components/Ui/InputItem";
export default {
  name: "Login",
  components: {Modal,InputItem},
  mixins: [openModal],
  data(){
    return{
      email:'',
      password:'',
    }
  }

}
</script>

<style scoped>

</style>