<template>
  <div class="container">
    <TableComponent :data="data"></TableComponent>
  </div>
</template>

<script>
import TableComponent from "@/components/Table/TableComponent.vue";
import { mapState } from "vuex";
export default {
  name: "DocumentThird",
  components: {
    TableComponent,
  },
  computed: {
    ...mapState({
      data: (state) => state.documentsManager.data3,
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
.table-class {
  border-collapse: collapse;
  width: 100%;
}
th {
  width: 2%;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04aa6d;
  color: white;
}
td {
  border: 1px solid #ddd;
  padding: 8px;
}
</style>
