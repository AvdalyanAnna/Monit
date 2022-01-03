<template>
  <div>
    <header>
      <p class="main__descript">Добро пожаловать на </p>
      <h2 class="main__title">Мониторинг сайтов</h2>
      <div class="button__block">
        <button class="reg" @click="openRegistration">Регистрация</button>
        <button class="log" @click="openLogin">Войти</button>
      </div>
    </header>

    <main></main>

    <Registration v-if="REGISTRATION"/>
    <Login v-if="LOGIN"/>
    <RemovePassword v-if="REMOVE_PASSWORD"/>
  </div>
</template>

<script>

import Registration from "@/components/Modal/Registration";
import Login from "@/components/Modal/Login";
import RemovePassword from "@/components/Modal/RemovePassword";
import {mapGetters} from "vuex";
import openModal from "@/mixin/openModal";

export default {
  name: "Home",
  mixins: [openModal],
  components: {Registration, Login, RemovePassword},
  computed: {
    ...mapGetters({
      LOGIN: "GET_LOGIN",
      REGISTRATION: "GET_REGISTRATION",
      REMOVE_PASSWORD: "GET_REMOVE_PASSWORD",
    })
  },
}
</script>

