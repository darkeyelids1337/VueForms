<template>
  <div>
    <div class="pages-wrapper">
      <button
        v-for="(item, index) in Math.ceil(pages / visiblePosts)"
        :key="index"
        @click="setCurrentPage($event.target.value)"
        :value="index + 1"
        :style="{ marginLeft: '5px' }"
      >
        {{ index + 1 }}
      </button>
    </div>
    <div :style="{ marginTop: '15px' }">
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
    
  </div>
</template>

<script>


export default {
  name: "PaginationComponent",
  data() {
    return {
      currentPage: 1,
    };
  },
  props: {
    pages: {
      type: Number,
    },
    visiblePosts:{
        type:Number,
        default:5
    }
  },
  computed: {},
  methods: {
    setCurrentPage(value) {
      if (value === 0) {
        console.log(value);
        this.currentPage += 1;
      }
      else if( value > Math.ceil(this.pages / this.visiblePosts)){
        this.currentPage = --this.currentPage;
      }
      else{
        this.currentPage = value;
        this.$emit('setCurrentPage', value);
      }
    },
  },
};
</script>

<style scoped></style>
