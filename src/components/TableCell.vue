<template>
  <td v-for="(el, index) in item" :key="index">
    {{
      getKeyByValue(item, el) === formatters[0].id
        ? formatters[0].formatter(el)
        : el
    }}
  </td>
</template>

<script>
export default {
  name: "TableCell",
  props: {
    item: {
      type: Object,
    },
    formatters:{
        type: Array
    }
  },
  methods: {
    getKeyByValue(object, value) {
      return Object.keys(object).find((key) => object[key] === value);
    },
  },
};
</script>

<style scoped>
td {
  border: 1px solid #ddd;
  padding: 8px;
}
</style>
