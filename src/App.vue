<template ref="mainRef">
  <div>
    <div>
      <component :is="layout">
        <RouterView></RouterView>
      </component>
    </div>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import UserLayout from '@/layouts/UserLayout'
import NoLoginLayout from '@/layouts/NoLoginLayout'
import { RouterView } from "vue-router";
export default {
  name: "App",
  components: {
    RouterView,
    EmptyLayout
  },
  computed: {
    layout(){
      if(this.$route.meta.layout === 'user'){
        return UserLayout;
      }
      if(this.$route.meta.layout === 'no-login'){
        return NoLoginLayout;
      }
      else{
        return EmptyLayout;
      }
    }
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
