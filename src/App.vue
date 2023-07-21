<template>
  <div id="main">
    <div>
        <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
export default{
  name:'App',
  components:{
    RouterView
  },
  methods:{
    checkClick(evt){
      console.log(evt)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background-color: #e5eaf5;
}
</style>
