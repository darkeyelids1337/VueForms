<template>
  <div class="login-wrapper">
    <h1>Авторизация</h1>
    <div class="login-form">
      <label>
        Логин:
        <input type="text" class="login-input" v-model="login" />
        <p v-if="isError">Перепроверьте данные</p>
      </label>
      <label>
        Пароль:
        <input type="password" class="password-input" v-model="password" />
        <p v-if="isError">Перепроверьте данные</p>
      </label>
    </div>
    <div class="buttons-wrapper">
      <div>
        <button
          @click.prevent="onLogin"
          class="login-button"
          :disabled="login === '' || password === ''"
        >
          Войти
        </button>
      </div>
      <div>
        <button @click.prevent="noAuth">Передать показания без авторизации</button>
      </div>
    </div>
  </div>
  <ModalComponent :isVisible="isModal" @closeModal="closeModal">
    <h1>Неверный логин или пароль</h1>
  </ModalComponent>
</template>

<script>
import ModalComponent from "@/components/ModalComponent.vue";
import {mapMutations, mapState } from "vuex";
export default {
  name: "LoginComponent",
  components: {
    ModalComponent,
  },
  data() {
    return {
      login: "",
      password: "",
      isModal: false,
      isError: false,
    };
  },
  computed: {
    ...mapState({
      loginUsers: state => state.loginManager.users
    })
  },
  methods: {
    ...mapMutations({
      setLoginUser: "loginManager/setLoginUser",
    }),
    noAuth() {
      this.$router.push("/no-login");
    },
    onLogin() {
      const data = this.loginUsers;
      console.log(this.loginUsers);
      const newArr = data.filter((item) => {
        if (
          item["login"] === this.login &&
          item["password"] === this.password
        ) {
          return item;
        }
      });
      if (newArr.length > 0) {
        this.setLoginUser(newArr[0]);
        this.$router.push("/login-info-table");
      } else {
        this.isModal = true;
        this.isError = true;
      }
    },
    closeModal() {
      this.isModal = false;
    },
  },
};
</script>

<style scoped>
.login-wrapper {
  width: 500px;
  height: 300px;
  margin:  0 auto;
  margin-top: 15%;
  background-color: #f4f7f6;
  padding: 10px;
  box-shadow: 0px 5px 10px 10px rgba(34, 60, 80, 0.2) inset;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
}
.login-button {
  margin-top: 15px;
}
.buttons-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
button {
  border-radius: 15px;
  border-color: white;
  border-style: none;
  padding: 8px;
  text-align: center;
  font-size: 20px;
}
button:active {
  background-color: rgb(18, 248, 18);
}
p {
  margin: 0;
  color: red;
  font-size: 12px;
}
label {
  text-align: center;
}
</style>
