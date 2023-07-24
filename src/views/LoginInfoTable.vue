<template>
  <div>
    <h1>After Login: {{ name }}</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LoginInfoTable",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapGetters({
      getActiveUser: "loginManager/getActiveUser",
    }),
  },
  created() {
    const { name } = this.getActiveUser;
    this.name = name;
  },
};
</script>

<style></style>
