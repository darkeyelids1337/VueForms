<template>
  <div>
    <h1>404 page not found</h1>
    <button type="button" @click.prevent="backHome">Вернуться домой</button>
  </div>
</template>

<script>
export default {
  name: "ErrorComponent",
  methods: {
    backHome() {
      return this.$router.push("/");
    },
  },
};
</script>

<style scoped>
button {
  border-radius: 15px;
  border-color: white;
  border-style: none;
  padding: 8px;
  text-align: center;
  font-size: 20px;
  margin-top: 25px;
}
button:active {
  background-color: rgb(18, 248, 18);
}
</style>
