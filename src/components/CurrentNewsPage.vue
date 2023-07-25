<template>
  <div class="content">
    <h1>{{ content.title }}</h1>
    <p>{{ content.body }}</p>
  </div>
  <button @click="goBack">Назад</button>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CurrentNewsPage",
  data(){
    return{
        
    }
  },
  computed: {
    ...mapState({
      data: (state) => state.newsManager.news,
    }),
    content() {
      const id = this.$router.currentRoute.value.params.id;
      return this.data[id - 1];
    },
  },
  methods:{
    goBack(){
        this.$router.push('/news');
    }
  }
};
</script>

<style scoped>
.content{
    width: 33%;
    height: 33%;
    margin: 0 auto;
    background-color: whitesmoke;
    border: 2px solid black;
    padding: 10px;
    margin-bottom: 20px;
    box-shadow: 0px 5px 10px 8px rgba(34, 60, 80, 0.2) inset;
}
</style>
