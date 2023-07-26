<template>
  <div>
    <div class="pages-wrapper">
      <button
        v-for="(item, index) in visibleButtons"
        :key="index"
        @click="setCurrentPage($event.target.value)"
        :value="item"
        :style="{ marginLeft: '5px' }"
        :class="{active: item === +currentPage}"
      >
        {{ item }}
      </button>
      <b
        v-if="
          Math.ceil(pages / visiblePosts) > 3 &&
          +currentPage + 2 < Math.ceil(pages / visiblePosts)
        "
        >...</b
      >
      <button
        v-if="
          Math.ceil(pages / visiblePosts) > 3 &&
          +currentPage + 2 < Math.ceil(pages / visiblePosts)
        "
        @click="setCurrentPage($event.target.value)"
        :value="Math.ceil(pages / visiblePosts)"
      >
        {{ Math.ceil(pages / visiblePosts) }}
      </button>
    </div>
    <div :style="{ marginTop: '15px', marginBottom: '15px' }">
      <button
        :style="{ marginRight: '5px' }"
        @click.prevent="setCurrentPage(--currentPage)"
      >
        Предыдущая страница
      </button>
      <button @click.prevent="setCurrentPage(++currentPage)">
        Следующая страница
      </button>
    </div>
    <div>
      Отображение по
      <select
        :value="visiblePosts"
        @input="setVisiblePosts($event.target.value)"
      >
        <option>2</option>
        <option>5</option>
        <option>10</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PaginationComponent",
  data() {
    return {
      currentPage: 1,
      visiblePosts: 5,
      isPointers: false,
    };
  },
  props: {
    pages: {
      type: Number,
    },
  },
  computed: {
    ...mapState({
      data: (state) => state.newsManager.news,
    }),
    visibleButtons() {
      const pages = Math.ceil(this.pages / this.visiblePosts);
      const range = (start, stop, step) =>
        Array.from(
          { length: (stop - start) / step + 1 },
          (_, i) => start + i * step
        );
      const currentPage = this.currentPage;
      let pagesArray = [];
      if (currentPage <= 1) {
        pagesArray = range(1, ((+currentPage) + 2), 1);
      } else if (+currentPage + 2 >= pages) {
        pagesArray = range(pages - 3, pages, 1);
      } else {
        pagesArray = range(+currentPage - 1, ((+currentPage) + 1), 1);
      }

      if (pages <= 3) {
        pagesArray = range(1, pages, 1);
      }
      return pagesArray;
    },
  },
  methods: {
    setCurrentPage(value) {
      if (value < 1) {
        console.log(value);
        this.currentPage = 1;
      } else if (value > Math.ceil(this.pages / this.visiblePosts)) {
        this.currentPage = --this.currentPage;
      } else {
        this.currentPage = value;
        this.$emit("setCurrentPage", value);
      }
    },
    setVisiblePosts(value) {
      if (value > this.data.length) {
        this.currentPage = 1;
      }
      if (value !== "") {
        this.visiblePosts = value;
        this.currentPage = 1;
        this.$emit("setVisiblePosts", value);
      }
    },
  },
};
</script>

<style scoped>
p {
  font-size: 32px;
  padding: 0;
}
b {
  margin-left: 5px;
  margin-right: 5px;
}
.active{
  background-color: blue;
  color: white;
}
</style>
