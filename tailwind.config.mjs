/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui"],
        serif: ["Newsreader", "serif"],
        handwriting: ["Caveat", "handwriting"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
