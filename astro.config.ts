import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jatnnik.dev",
  integrations: [tailwind(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "one-light",
    },
  },
  output: "static",
})