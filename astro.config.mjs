import {
  defineConfig,
  passthroughImageService,
  sharpImageService,
} from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://cpp-jll.com",
  integrations: [react(), tailwind(), sitemap()],

  image: {
    domains: ["api.cpp-jll.com"],
  },

  output: "static",
});
