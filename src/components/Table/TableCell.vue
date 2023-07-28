<template>
  <td ref='td'>
    <!-- <component :is="content"></component> -->
    <span v-html="content"></span>
  </td>
</template>

<script>
//import Vue from 'vue'
export default {
  name: "TableCell",
  props: {
    item: {
      type: [String, Number],
    },
    column:{
      type: Object
    }
  },
  computed:{
    content(){
      if(this.refs && this.formatter){
        return this.formatter(this.item, this.refs);
      }
      else{
        return this.formatter ? this.formatter(this.item) : this.item;
      }
      
    }
  },
  data() {
    return {
     formatter: this.column['formatter'],
     refs: null,
    };
  },
  mounted(){
    this.$watch(
      () => {
        return this.refs = this.$refs.td;
      },
      (val) => {
        return val;
      }
    )
  },
  // watch:{
  //   refs(newValue, oldValue){
  //     console.log(newValue, oldValue);
  //     return this.formatter(this.item, newValue)
  //   }
  // }
};
</script>

<style scoped>
td {
  border: 1px solid #ddd;
  padding: 8px;
}
</style>
