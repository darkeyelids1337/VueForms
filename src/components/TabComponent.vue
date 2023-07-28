<template>
  <div class="tab">
    <button v-for="(item, index) in documents" :key="index" @click="setComponent(item)">
        {{ item.name }}
    </button>
  </div>
  <component :is="currentComponent"> </component>
</template>

<script>
export default {
  name: "TabComponent",
  props:{
    documents:{
        type: Array
    },
    name:{
        type:String
    }
  },
  data(){
    return {
        currentComponent: this.documents.filter((item) => item['first'] === true)[0].component.default
    }
  },
  computed:{
    visibleDocument(){
        return this.documents.filter((item) => item[this.name])
    }
  },
  methods:{
    setComponent(item){
        return this.currentComponent = item.component.default;
    },
  }
};
</script>

<style>
.tab {
  display: flex;
  justify-content: center;
  gap: 3%;
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  margin: 0 auto;
}
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  border: 1px solid black;
}
.tab button:hover {
  background-color: #ddd;
}

.tab button.active {
  background-color: #ccc;
}
</style>
