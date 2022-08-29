import path from "path";
import adapter from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    alias: {
      $styles: path.resolve("./src/styles"),
      $firebase: path.resolve("./src/firebase"),
      $lib: path.resolve("./src/lib")
    },
    adapter: adapter(),
  }
};

export default config;
