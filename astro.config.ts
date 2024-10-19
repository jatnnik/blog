import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://jatnnik.dev",
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: "catppuccin-frappe",
    },
  },
  output: "static",
})