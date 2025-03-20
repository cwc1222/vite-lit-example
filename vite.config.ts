import vitePluginLit from "./plugins/vite-plugin-lit";
import litAdapterStatic from "./plugins/lit-adapter-static";
import path from "path";

import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      "@routes": path.resolve(__dirname, "/src/routes"),
      "@components": path.resolve(__dirname, "/src/components"),
    },
  },
  // plugins: [vitePluginLit()],
});
