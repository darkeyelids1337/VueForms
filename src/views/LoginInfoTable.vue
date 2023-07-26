<template>
  <div :style="{}">
    <h1>Главная</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LoginInfoTable",
  components:{
  },
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState({
        activeUser: state => state.loginManager.activeUser,
    })
  },
  created() {
    this.name = this.activeUser.name;
  },
};
</script>

<style></style>
