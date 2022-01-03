<template>
  <Modal withGoogle>
    <template slot="header">
      <h1 class="modal__title">Регистрация</h1>
      <button class="smen" @click.prevent="openLogin">Войти</button>
    </template>
    <div class="modal__text">или зарегистрируйтесь:</div>
    <form action="">
      <div class="input__item">
        <div class="input__title">Имя</div>
        <input type="text" placeholder="Ваше имя" v-model="name">
        <p class="allert"></p>
      </div>
      <InputItem input-title="Имя" input-placeholder="Ваш имя" v-model="name"/>
      <InputItem input-title="E-mail" input-placeholder="Ваш e-mail" v-model="email"/>
      <InputItem input-title="Пароль" input-type="password" input-placeholder="Придумайте пароль" v-model="password"/>
      <InputItem input-title="Телефон" input-placeholder="+7 (999) 999-99-99" v-model="phone"/>
      <InputItem input-title="Код из смс" input-placeholder="" input-class="sms" v-model="code"/>

     <div class="f_bt">
       <button type="submit" class=" form__button reg__btn">Регистрация</button>
     </div>
    </form>
  </Modal>
</template>

<script>

import Modal from "@/components/Ui/Modal";
import openModal from "@/mixin/openModal";
import InputItem from "@/components/Ui/InputItem";

export default {
  name: "Registration",
  components: {Modal, InputItem},
  mixins: [openModal],
  data() {
    return {
      name: '',
      email: '',
      password: '',
      phone: '',
      code: '',
    }
  }
}
</script>

<style scoped>

</style>