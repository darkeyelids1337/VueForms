<template>
  <div class="container">
    <TableComponent :data="data" :columns="columns" pagination=""></TableComponent>
  </div>
</template>

<script>
import TableComponent from "@/components/Table/TableComponent.vue";
import { mapState } from "vuex";
export default {
  name: "DocumentSecond",
  components: {
    TableComponent,
  },
  computed: {
    ...mapState({
      data: (state) => state.documentsManager.data2,
    }),
  },
  methods: {
    setCurrentPage(value) {
      this.currentPage = value;
    },
    setVisiblePosts(value) {
      if (this.currentPage !== 1) {
        this.currentPage = 1;
        this.visiblePosts = value;
      } else {
        this.visiblePosts = value;
      }
    },
  },

  data() {
    return {
      currentPage: 1,
      visiblePosts: 5,
      columns: [
        {
          id: "company",
          label:'company',
        },
        {
          id: "contact",
          label:'contact',
        },
        {
          id: "country",
          label: "country",
          formatter: (value) => {
            return 'The ' + value;
          },
        },
        {
          id: "number",
          label: "number",
          formatter: (value) => {
            return '#' + value;
          }
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  margin-top: 2%;
  width: 70%;
  border: 1px solid black;
}
</style>
