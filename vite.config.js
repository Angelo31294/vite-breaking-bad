import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOption: {
      scss: {
        additionalData: '@import "./src/style/variable.scss";',
      },
    },
  },
});
