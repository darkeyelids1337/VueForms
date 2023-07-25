<template>
  <div>
    <h1>Contact Us</h1>
    <div class="contacts-list">
      <ul>
      <li>Number: 8-800-555-35-35</li>
      <li>E-mail: example@gmail.com</li>
      <li>Address: Konoha street, 28</li>
    </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
ul {
  padding: 0;
  
}
li{
  margin-bottom: 15px;
}
.contacts-list{
  background-color: white;
  width: 30%;
  margin: 0 auto;
  height: 30%;
  padding: 5px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  font-size: 18px;
  line-height: 16px;

}
</style>
