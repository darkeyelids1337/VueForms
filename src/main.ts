import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/index";
import router from "./router/index";
import VueClickAway from "vue3-click-away";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueClickAway);
app.mount("#app");
