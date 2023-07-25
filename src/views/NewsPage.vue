<template>
  <div class="container">
    <!-- <ul class="news-wrapper">
      <li v-for="(item, index) in data.slice((currentPage - 1)* visiblePosts,  visiblePosts*currentPage)" :key="index" :id="index" class="new-element" @click="goTo($event)">
        <h3 :id="index">{{ item.title }}</h3>
        <p :id="index">{{ item.body }}</p>
      </li>
    </ul> -->
    <div class="news-wrapper">
      <div
        v-for="(item, index) in data.slice(
          (currentPage - 1) * visiblePosts,
          visiblePosts * currentPage
        )"
        :key="index"
        :id="index"
        class="new-element"
        @click="goTo($event)"
      >
        <h2 :id="index">{{ item.title }}</h2>
        <p :id="index">{{ item.body }}</p>
      </div>
    </div>
    <PaginationComponent
      :pages="data.length"
      :visiblePosts="visiblePosts"
      @setCurrentPage="setCurrentPage"
      :style="{ marginTop: '10px' }"
    ></PaginationComponent>
    <p>Текущая страница: {{ currentPage }}</p>
    <div>
      <label>
        Отображение по
        <input
          type="number"
          :value="visiblePosts"
          @input="setVisiblePosts($event.target.value)"
        />
        постов
      </label>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PaginationComponent from "@/components/PaginationComponent.vue";
export default {
  name: "NewsPage",
  components: {
    PaginationComponent,
  },
  data() {
    return {
      currentPage: 1,
      visiblePosts: 10,
    };
  },
  computed: {
    ...mapState({
      data: (state) => state.newsManager.news,
    }),
  },
  methods: {
    setCurrentPage(value) {
      this.currentPage = value;
    },
    goTo(evt) {
      const id = evt.target.id;
      this.$router.push(`/news/${+id + 1}`);
    },
    setVisiblePosts(value) {
      console.log(value);
      if (value > this.data.length) {
        this.currentPage = 1;
      }
      if (value !== "") {
        this.visiblePosts = value;
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding-bottom: 5%;
}
.news-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
.new-element {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(135, 222, 68, 1) 0%,
    rgba(190, 237, 154, 1) 0%,
    rgba(255, 255, 255, 1) 32%,
    rgba(0, 255, 94, 0.9724264705882353) 100%
  );
  width: 33%;
  height: 33%;
  border: 2px solid black;
  border-radius: 12%;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}
p {
  margin-top: 0;
  line-height: 1.6;
}
h2 {
  line-height: 2;
  margin-top: 0;
  text-align: center;
  font-size: 32px;
  border: 2px solid black;
  border-radius: 20%;
}
</style>
