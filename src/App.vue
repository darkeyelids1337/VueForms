<template ref="mainRef">
  <div>
    <div>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
export default {
  name: "App",
  components: {
    RouterView,
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
  margin-top: 60px;
  width: 100%;
  height: 100%;
}
html {
  height: 100%;
}
body {
  background-color: #e5eaf5;
  height: 100%;
}
</style>
