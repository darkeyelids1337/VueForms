<template>
  <tr>
    <TableCell v-for="(el, index) in item" :key="el" :item="el" :column="columns.find((element) => element.id === index )">
    </TableCell>
  </tr>
</template>

<script>
import TableCell from "./TableCell.vue";
export default {
  name: "TableRow",
  components: {
    TableCell,
  },
  props: {
    item: {
      type: Object,
    },
    columns:{
        type: Array,
    }
  },
  
};
</script>

<style scoped>
td {
  border: 1px solid #ddd;
  padding: 8px;
}
</style>
