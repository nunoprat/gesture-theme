import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/app.css";
import router from "./router";

createApp(App).use(router).mount("#app");
