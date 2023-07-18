<template>
  <div>
    <div>
        <!-- <InfoTable v-if="this.$store.getters.getFoundUser.length > 0"></InfoTable>
        <InputForm v-else></InputForm>
        <ErrorPage v-show="false"></ErrorPage> -->
        <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
// import InfoTable from './components/InfoTable.vue';
// import InputForm from './components/InputForm.vue';
// import ErrorPage from './components/ErrorPage.vue';
export default{
  name:'App',
  components:{
    // InfoTable,
    // InputForm,
    // ErrorPage,
    RouterView
  },
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
</style>
