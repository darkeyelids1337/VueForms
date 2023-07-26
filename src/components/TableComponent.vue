<template>
  <table class="table-class" id="myTable">
    <tr>
      <th
        v-for="(item, index) in Object.keys(data[0])"
        :key="index"
        @click="sortTable(index)"
      >
        {{ item.toUpperCase() }}
      </th>
    </tr>
    <tr
      v-show="pagination"
      v-for="(item, index) in data.slice(
        (currentPage - 1) * visiblePosts,
        visiblePosts * currentPage
      )"
      :key="index"
    >
      <td v-for="el in item" :key="el">
        {{ el }}
      </td>
    </tr>
    <tr v-show="!pagination" v-for="(item, index) in data" :key="index">
      <td v-for="el in item" :key="el">
        {{ el }}
      </td>
    </tr>
  </table>
  <PaginationComponent
    v-if="pagination"
    :pages="data.length"
    @setCurrentPage="setCurrentPage"
    @setVisiblePosts="setVisiblePosts"
    :style="{ marginTop: '10px' }"
  ></PaginationComponent>
</template>

<script>
import PaginationComponent from "@/components/PaginationComponent.vue";
import { mapState } from "vuex";
export default {
  name: "TableComponent",
  props: {
    pagination: {
      type: Boolean,
    },
    data: {
      type: Array,
    },
  },
  components: {
    PaginationComponent,
  },
  computed: {
    ...mapState({
      data: (state) => state.documentsManager.data,
    }),
  },
  methods: {
    setCurrentPage(value) {
      // console.log(this.data);
      // data.slice(
      //   (currentPage - 1) * visiblePosts,
      //   visiblePosts * currentPage
      // )
      // const dataArr = this.data
      //   .slice(
      //     (this.currentPage - 1) * this.visiblePosts,
      //     this.visiblePosts * this.currentPage
      //   )

      // console.log(dataArr);
      // // dataArr.forEach((item) => console.log(item))
      // this.data.forEach((item) => Object.keys(item));
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
    sortTable(n) {
      let table,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch,
        dir,
        switchcount = 0;
      table = document.getElementById("myTable");
      switching = true;

      dir = "asc";

      while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < rows.length - 1; i++) {
          shouldSwitch = false;
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];

          if (dir == "asc") {
            if (
              x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() &&
              isNaN(+x.innerHTML)
            ) {
              shouldSwitch = true;
              break;
            } else if (Number(x.innerHTML) > Number(y.innerHTML)) {
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (
              x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase() &&
              isNaN(+x.innerHTML)
            ) {
              shouldSwitch = true;
              break;
            } else if (Number(x.innerHTML) < Number(y.innerHTML)) {
              shouldSwitch = true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          switchcount++;
        } else {
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
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
