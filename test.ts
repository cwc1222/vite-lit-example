import litAdapterStatic from "./plugins/lit-adapter-static.ts";

const plugin = litAdapterStatic();
if (plugin.buildEnd) {
  plugin.buildEnd(); // @ts-ignore
}
