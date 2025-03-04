import vitePluginLit from "./plugins/vite-plugin-lit";
import litAdapterStatic from "./plugins/lit-adapter-static";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vitePluginLit()],
});
