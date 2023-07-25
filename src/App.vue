<template ref="mainRef">
  <div>
    <div>
      <HeaderComponent v-if="activeUser.name">
        {{ activeUser.name }}
      </HeaderComponent>
      <RouterView></RouterView>
      <FooterComponent v-if="activeUser.name"></FooterComponent>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { RouterView } from "vue-router";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    RouterView,
    HeaderComponent,
    FooterComponent,
  },
  computed: {
    ...mapState({
      activeUser: (state) => state.loginManager.activeUser,
    }),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  /* width: 100%;
  height: 100%; */
}
/* html {
  height: 100%;
} */
body {
  background-color: #e5eaf5;
  height: 100%;
  margin: 0;
}
</style>
