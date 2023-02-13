/*
 * @Author: navalercon
 * @Date: 2023-02-13 11:03:23
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-13 12:01:22
 * @Description:
 */
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ElementPlus from "element-plus";

import "element-plus/dist/index.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(ElementPLus);
app.mount("#app");
