/* eslint-disable no-useless-escape */
/*
 * @Author: navalercon
 * @Date: 2023-02-13 11:03:23
 * @LastEditors: navalercon
 * @LastEditTime: 2023-02-14 11:00:31
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueSetupExtend from "vite-plugin-vue-setup-extend";

import { resolve } from "path";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), VueSetupExtend()],
  resolve: {
    alias: [
      {
        find: /\@\//,
        replacement: pathResolve("src") + "/",
      },
    ],
  },
  css: {
    requireModuleExtension: true,
  },
});
