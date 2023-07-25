<template>
  <div :class="layout">
    <div class="footer">
      Все права защищены, viewers discretion is advised © Copyright 2002-2023,
      Камызин Артем
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {
    layout: {
      type: String,
    },
  },
};
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 10px;
  background-color: #39b54a;
  color: #fff;
  width: 100%;
}
.empty-layout{
    display: none;
}
</style>
