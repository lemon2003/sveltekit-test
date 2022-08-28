import path from "path";
import adapter from "@sveltejs/adapter-node";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    aliases: {
      $styles: path.resolve("./src/styles"),
      $firebase: path.resolve("./src/firebase"),
      $lib: path.resolve("./src/lib")
    }
  }),

  kit: {
    adapter: adapter({
      out: "../functions/src/svelte-build"
    }),
    vite: {
      resolve: {
        alias: {
          $styles: path.resolve("./src/styles"),
          $firebase: path.resolve("./src/firebase"),
          $lib: path.resolve("./src/lib")
        }
      }
    }
  }
};

export default config;
