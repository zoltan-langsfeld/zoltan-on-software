import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  // If you're hosting under /zoltan-on-software on GitHub Pages:
  base: "/zoltan-on-software",

  // Other configuration options...
  trailingSlash: "never",

  integrations: [react(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
    },
  },
});
