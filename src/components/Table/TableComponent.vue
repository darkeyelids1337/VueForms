<template>
  <table class="table-class" id="myTable">
    <TableHeader :headers="getTitles"></TableHeader>
    <TableRows
      :columns="columns"
      :data="
        getRows.slice(
          (currentPage - 1) * visiblePosts,
          visiblePosts * currentPage
        )
      "
    ></TableRows>
    <tr v-show="!pagination" v-for="(item, index) in getRows" :key="index">
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
import TableHeader from "./TableHeader.vue";
import TableRows from "./TableRows.vue";
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
    columns: {
      type: Array,
    },
  },
  components: {
    PaginationComponent,
    TableHeader,
    TableRows,
  },
  computed: {
    ...mapState({
      data: (state) => state.documentsManager.data,
    }),
    getTitles() {
      const newArr = {};
      for (let el of this.columns) {
        newArr[el.id] = el.id;
      }
      const rows = [];
      this.data.map((item) => {
        for (let el in item) {
          //el is key
          const newObj = {};
          if (el in newArr) {
            for (let i in newArr) {
              newObj[i] = item[el];
            }

            rows.push(newObj);
          }
        }
      });
      return newArr;
    },
    getRows() {
      const newArr = {};
      for (let el of this.columns) {
        newArr[el.id] = el.id;
        if (el.formatter) {
          newArr[el.id] = el.formatter;
        }
      }
      console.log(newArr);
      const rows = [];
      let newObj = {};
      this.data.map((item) => {
        for (let el in item) {
          //el is key
          if (el in newArr) {
            newObj[el] = item[el];
            if (Object.keys(newObj).length === Object.keys(newArr).length) {
              rows.push(newObj);
              newObj = {};
            }
          }
        }
      });
      return rows;
    },
  },
  methods: {
    getKeyByValue(object, value) {
      return Object.keys(object).find((key) => object[key] === value);
    },
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
      formatters: this.columns.filter((item) => item.formatter),
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
</style>
