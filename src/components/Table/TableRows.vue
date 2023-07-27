<template>
  <TableRow v-for="(item, index) in data" :key="index" :item="item" :columns="columns"> </TableRow>
</template>

<script>
//import TableCell from "./TableCell.vue";
import TableRow from "./TableRow.vue";
export default {
  name: "TableRows",
  components: {
    TableRow,
  },
  props: {
    data: {
      type: Array,
    },
    columns:{
      type: Array,
    }
  },
};
</script>

<style scoped></style>
