import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs';
import { remarkModifiedTime } from './src/lib/remark-modified-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: "https://kishore2494.github.io",
  base: "/personal-site",
  integrations: [sitemap(), mdx()], 
  markdown: {
    syntaxHighlight: 'prism',
    remarkPlugins: [remarkReadingTime, remarkModifiedTime]
  },
  output: "static", // Static output for GitHub Pages
});