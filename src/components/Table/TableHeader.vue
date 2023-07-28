<template>
  <tr>
    <th v-for="(item, index) in headers" :key="index" @click="sortTable(item)">
      {{ item.toUpperCase() }}
      <span v-if="isAsc">↓</span>
      <span v-if="isDesc">↑</span>
    </th>
  </tr>
</template>

<script>
export default {
  name: "TableHeader",
  props: {
    headers: {
      type: Object,
    },
  },
  data(){
    return {
      isAsc : false,
      isDesc: false,
    }
  },
  methods: {
    sortTable(n) {
      const some = Object.values(this.headers);
      n = some.indexOf(n)
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
            this.isDesc = false;
            this.isAsc = true;
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
            this.isAsc = false;
            this.isDesc = true;
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
};
</script>
<style scoped>
th {
  width: 2%;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04aa6d;
  color: white;
}
</style>
