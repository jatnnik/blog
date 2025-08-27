import { defineConfig } from "astro/config"

import sitemap from "@astrojs/sitemap"

import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  site: "https://jatnnik.dev",
  integrations: [sitemap()],

  markdown: {
    shikiConfig: {
      theme: "one-light",
    },
  },

  build: {
    format: 'directory',
  },
  trailingSlash: 'always',

  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },
})
