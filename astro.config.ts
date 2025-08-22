import sitemap from "@astrojs/sitemap"
import { defineConfig } from "astro/config"
import path from "path"
import { siteConfig } from "./src/config"

// https://astro.build/config
export default defineConfig({
  site: siteConfig.website,
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "one-light",
    },
  },
  output: "static",
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
  devToolbar: {
    enabled: false,
  },
})
