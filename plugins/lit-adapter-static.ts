// plugins/lit-adapter-static.ts
import { resolve } from "path";
import { promises as fs } from "fs";
import { globby } from "globby";
import { render } from "@lit-labs/ssr";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { collectResultSync } from "@lit-labs/ssr/lib/render-result.js";
import { html } from "lit";

import { Plugin } from "vite";

const routesDir = resolve("src/routes");
const outputDir = resolve("dist");

export default function litAdapterStatic(): Plugin {
  return {
    name: "lit-adapter-static",
    enforce: "post",
    apply: "build",
    async buildEnd() {
      console.log("\n[litAdapterStatic] Generating static site...");
      await fs.mkdir(outputDir, { recursive: true });

      const pageFiles = await globby([`${routesDir}/**/+page.ts`]);

      for (const pageFile of pageFiles) {
        const relativePath = pageFile
          .replace(routesDir, "") // Remove base path
          .replace(/^\//, "") // Remove only **one** leading slash, not all
          .replace(/\+page\.ts$/, "");

        const urlPath = relativePath || "/";
        const outputPath = resolve(outputDir, relativePath, "index.html");

        console.log(`Prerendering: ${urlPath} -> ${outputPath}`);
        await fs.mkdir(resolve(outputDir, relativePath), { recursive: true });

        const elementName = (await import(pageFile)).ElementName;
        const result = render(
          html`${unsafeHTML(`<${elementName}></${elementName}>`)}`,
        );
        const rendered = collectResultSync(result);
        await fs.writeFile(
          outputPath,
          `<!DOCTYPE html><html><body>${rendered}</body></html>`,
          "utf-8",
        );
      }

      console.log("Static site generation completed!");
    },
  };
}
