/*
 * @Author: kevin Kevin_Su@systemweb.com.tw
 * @Date: 2025-03-27 15:43:29
 * @LastEditors: kevin Kevin_Su@systemweb.com.tw
 * @LastEditTime: 2025-03-28 11:58:49
 * @FilePath: \demo\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "/demo/",
});
