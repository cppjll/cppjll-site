import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://cpp-jll.com",
  integrations: [react(), tailwind(), sitemap()],

  image: {
    domains: ["https://api.cpp-jll.com"],
    service: passthroughImageService(),
  },

  output: "static",
});
