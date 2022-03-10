import mount from "./scripts/mount.js";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";

document.body.appendChild(mount());

const app = createApp(App).use(router).use(store).mount(".app-root");
