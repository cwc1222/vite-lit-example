import { Plugin } from "vite";

export default function vitePluginLit(): Plugin {
  console.log("vite-plugin-lit is loading...");

  return {
    name: "vite-plugin-lit",
    enforce: "pre",
    transform(code, id) {
      console.log(`vite-plugin-lit transforming: ${id}`);
      debugger;
      if (id.endsWith(".ts")) {
        return {
          code: `import { html, render } from 'lit';\n${code}`,
          map: null,
        };
      }
      return null;
    },
    handleHotUpdate({ file, server }) {
      if (file.endsWith(".ts")) {
        server.ws.send({ type: "full-reload" });
      }
    },
  };
}
