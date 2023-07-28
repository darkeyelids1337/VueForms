<template>
  <div>
    <h1>Contact Us</h1>
    <div class="contacts-list">
      <ul>
        <li>Номер: 8-800-555-35-35</li>
        <li>Почта: example@gmail.com</li>
        <li>Адрес: Авроры, 9. Самара</li>
      </ul>
    </div>
    <div style="position: relative; overflow: hidden">
      <a
        href="https://yandex.ru/maps/51/samara/?utm_medium=mapframe&utm_source=maps"
        style="color: #eee; font-size: 12px; position: absolute; top: 0px"
        >Самара</a
      ><a
        href="https://yandex.ru/maps/51/samara/house/ulitsa_avrory_9/YUkYdw5iS0MFQFtpfX15cXlqbA==/?ll=50.191855%2C53.180569&utm_medium=mapframe&utm_source=maps&z=17.35"
        style="color: #eee; font-size: 12px; position: absolute; top: 14px"
        >Улица Авроры, 9 — Яндекс.Карты</a
      ><iframe
        src="https://yandex.ru/map-widget/v1/?ll=50.191855%2C53.180569&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzM2MDM0MRI20KDQvtGB0YHQuNGPLCDQodCw0LzQsNGA0LAsINGD0LvQuNGG0LAg0JDQstGA0L7RgNGLLCA5IgoN4cRIQhXvuFRC&z=17.35"
        width="560"
        height="400"
        frameborder="1"
        allowfullscreen="true"
        style="position: relative"
      ></iframe>
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
li {
  margin-bottom: 15px;
}
.contacts-list {
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
