import { createApp } from "vue";

import router from "./router.js";
import store from "./store/index.js";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(store);

app.mount("#app");
