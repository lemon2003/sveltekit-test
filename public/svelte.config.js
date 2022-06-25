import path, { resolve } from "path";
import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    aliases: {
      $styles: path.resolve("./src/styles")
    }
  }),

  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          $styles: resolve("./src/styles")
        }
      }
    }
  }
};

export default config;
