<template>
  <tr v-for="(item, index) in data" :key="index">
    <TableCell :item="item" :formatters="formatters"></TableCell>
  </tr>
</template>

<script>
import TableCell from './TableCell.vue';
export default {
  name: "TableRows",
  components:{
    TableCell,
  },
  props: {
    data: {
      type: Array,
    },
    formatters:{
        type:Array
    }
  },
 
};
</script>

<style scoped>

</style>
