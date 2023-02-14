/*
 * @Author: navalercon
 * @Date: 2023-02-13 11:03:23
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-14 08:38:52
 * @Description:
 */
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ElementPlus from "element-plus";

import "element-plus/dist/index.css";
import "normalize.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.mount("#app");
