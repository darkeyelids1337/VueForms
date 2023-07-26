<template>
  <div :class="layout">
    <div class="header-wrapper">
      <div class="logo-wrapper" @click="toMain">
        <img src="@/assets/logo.png" width="50" height="50" />
      </div>
      <div>
        <h2>
          Добро пожаловать,
          <slot> </slot>
        </h2>
      </div>
      <div>
        <img
          src="@/assets/logout.png"
          width="30"
          height="30"
          class="img-wrapper"
          @click="onExit"
        />
      </div>
    </div>
    <div class="side-bar">
      <SideBarComponent></SideBarComponent>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import SideBarComponent from "./SideBarComponent.vue";
export default {
  name: "HeaderComponent",
  components: {
    SideBarComponent,
  },
  props: {
    layout: {
      type: String,
    },
  },
  computed: {
    ...mapState({
      activeUser: (state) => state.loginManager.activeUser,
    }),
  },
  methods: {
    ...mapMutations({
      setLoginUser: "loginManager/setLoginUser",
    }),
    onExit() {
      this.setLoginUser({
        name: "",
        login: "",
        password: "",
      });
      this.$router.push("/");
    },
    toMain() {
      this.$router.push("/login-info-table");
    },
  },
};
</script>

<style scoped>
.header-wrapper {
  display: flex;
  /* height: 100%; */
  top: 0;
  margin-bottom: 2%;
  width: 100%;
  /* margin-bottom: 60px; */
  background-color: #a7b6c5;
  justify-content: space-around;
  /* position: fixed; */
  opacity: 0.9;
}
.logo-wrapper {
  padding-top: 15px;
  cursor: pointer;
}
.img-wrapper {
  padding-top: 15px;
  cursor: pointer;
}
.side-bar {
  position: fixed;
  height: 100%;
  background: #39b54a;
  top: 7%;
  display: flex;
}
.empty-layout {
  display: none;
}
</style>
