<template>
  <td>
    {{ formatter ? formatter(item) : item }}
  </td>
</template>

<script>
export default {
  name: "TableCell",
  props: {
    item: {
      type: String,
    },
    column:{
      type: Object
    }
  },
  data() {
    return {
     formatter: this.column['formatter'],
    };
  },
};
</script>

<style scoped>
td {
  border: 1px solid #ddd;
  padding: 8px;
}
</style>
