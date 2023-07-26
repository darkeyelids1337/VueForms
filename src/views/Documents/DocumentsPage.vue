<template>
  <TabComponent :documents="documents"></TabComponent>
</template>

<script>
import TabComponent from "@/components/TabComponent.vue";
export default {
  name: "DocumentsPage",
  components: {
    TabComponent,
  },
  data() {
    return {
      documents: [
        {
          name: "Document 1",
          component: require("@/views/Documents/DocumentFirst.vue"),
          first:true,
        },
        {
          name: "Document 2",
          component: require("@/views/Documents/DocumentSecond.vue"),
          first:false,
        },
        {
          name: "Document 3",
          component: require("@/views/Documents/DocumentThird.vue"),
          first:false
        },
      ],
    };
  },
};
</script>

<style></style>
