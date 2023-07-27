<template>
  <tr>
    <th v-for="(item, index) in headers" :key="index" @click="sortTable(index)">
      {{ item.toUpperCase() }}
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
