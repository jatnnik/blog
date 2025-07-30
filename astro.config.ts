import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://jatnnik.dev",
  integrations: [sitemap()],

  markdown: {
    shikiConfig: {
      theme: "one-light",
    },
  },

  output: "static",

  vite: {
    plugins: [],
  },
})
