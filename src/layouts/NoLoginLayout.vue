<template>
    <div>
      <div class="header-wrapper">
        <div class="logo-wrapper" @click="toMain">
          <img src="@/assets/logo.png" width="50" height="50" />
        </div>
        <div>
          <img
            src="@/assets/logout.png"
            width="30"
            height="30"
            class="img-wrapper"
            @click="onExit"
          />
        </div>
      </div>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: "NoLoginLayout",
    methods:{
      onExit(){
          this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  .header-wrapper {
    display: flex;
    height: 100%;
    width: 100%;
    margin-bottom: 60px;
    background-color: #a7b6c580;
    justify-content: space-around;
  }
  .logo-wrapper {
    padding-top: 15px;
    cursor: pointer;
  }
  .img-wrapper {
    padding-top: 15px;
    cursor: pointer;
  }
  </style>
  