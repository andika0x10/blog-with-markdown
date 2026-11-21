// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import { unified } from "@astrojs/markdown-remark";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import rehypeCopyButton from "./src/plugins/rehype-copy-button.mjs";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare(),
  integrations: [react()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex, rehypeHighlight, rehypeCopyButton],
    }),
    syntaxHighlight: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
