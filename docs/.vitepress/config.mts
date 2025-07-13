import { defineConfig } from "vitepress";

import tailwind from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "Mango",
  description: "A VitePress Site",
  themeConfig: {
    logo: { light: "/light-logo.svg", dark: "/dark-logo.svg", alt: "logo" },
    siteTitle: false,

    nav: [
      { text: "Home", link: "/" },
      {
        text: "Examples",
        items: [
          { text: "HTML", link: "/HTML/introduction" },
          { text: "CSS", link: "/CSS/introduction" },
          { text: "JavaScript", link: "/JavaScript/introduction" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Examples",
        items: [
          {
            text: "HTML",
            collapsed: false,
            items: [
              { text: "什么是HTML?", link: "/HTML/introduction" },
              { text: "语义化标签", link: "/HTML/semanticization" },
            ],
          },
          {
            text: "CSS",
            collapsed: false,
            items: [
              { text: "什么是 CSS？", link: "/CSS/introduction" },
              { text: "CSS 包含块", link: "/CSS/containingBlock.md" },
              { text: "格式化上下文", link: "/CSS/formattingContexts.md" },
            ],
          },
          {
            text: "JavaScript",
            collapsed: false,
            items: [{ text: "JS", link: "/JavaScript/introduction" }],
          },
        ],
      },
    ],

    outline: {
      level: "deep", // 可选的标题级别
      label: "页面导航", // 自定义标题
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },

  vite: {
    css: {
      postcss: {
        plugins: [tailwind(), autoprefixer()],
      },
    },
  },
});
