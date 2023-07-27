<template>
  <td v-for="(el, index) in item" :key="index">
    {{ toFormat(item, el) ? formatFunction[getKeyByValue(item, el)](el) : el }}
  </td>
</template>

<script>
export default {
  name: "TableCell",
  props: {
    item: {
      type: Object,
    },
    formatters: {
      type: Array,
    },
  },
  data() {
    return {
      formatFunction: this.formatters.reduce((obj, item) => {
        if (item.formatter) {
          console.log(obj)
          console.log(item.id)
          obj[item.id] = item.formatter;

        }
        return obj;
      }, {})
    };
  },
  computed: {
    findFormatter() {
      return this.formatters.map((item) => item["formatter"]);
    },
    formatKey() {
      return Object.keys(this.formatFunction);
    },
  },

  methods: {
    getKeyByValue(object, value) {
      return Object.keys(object).find((key) => object[key] === value);
    },
    currentKey(item, el){
        return this.getKeyByValue(item, el);
    },
    toFormat(item, el){
        console.log(item, el);
        return this.formatKey.includes(this.getKeyByValue(item, el)) ? true : false;
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
