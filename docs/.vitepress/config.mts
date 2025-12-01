import { defineConfig } from "vitepress";

import tailwind from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/skill",
  lang: "zh-CN",
  title: "Mango-Skill",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  description: "A VitePress Site",
  // appearance: "force-dark", // 强制深色模式
  appearance: "dark",
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
          { text: "DataStorage", link: "/DataStorage/introduction" },
          { text: "Module", link: "/Module/commonJs" },
          { text: "Vue", link: "/Vue/introduction" },
          { text: "UiLibray", link: "/UiLibary/introduction" },
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
            collapsed: true,
            items: [
              { text: "介绍", link: "/HTML/introduction" },
              { text: "语义化标签", link: "/HTML/semanticization" },
            ],
          },
          {
            text: "CSS",
            collapsed: true,
            items: [
              { text: "介绍", link: "/CSS/introduction" },
              { text: "CSS 包含块", link: "/CSS/containingBlock.md" },
              { text: "格式化上下文", link: "/CSS/formattingContexts.md" },
            ],
          },
          {
            text: "JavaScript",
            collapsed: true,
            items: [
              { text: "介绍", link: "/JavaScript/introduction" },
              { text: "EventLoop", link: "/JavaScript/EventLoop" },
              { text: "This指向", link: "/JavaScript/This指向" },
              { text: "Class", link: "/JavaScript/Class" },
              { text: "Promise", link: "/JavaScript/Promise" },
              { text: "ES6-ES11", link: "/JavaScript/ESFeatures" },
            ],
          },
          {
            text: "DataStorage",
            collapsed: true,
            items: [
              { text: "介绍", link: "/DataStorage/introduction" },
              { text: "cookies", link: "/DataStorage/cookies" },
            ],
          },
          {
            text: "Module",
            collapsed: true,
            items: [
              { text: "commonJs", link: "/Module/commonJs" },
              { text: "ESmodule", link: "/Module/esmodule" },
            ],
          },
          {
            text: "Vue",
            collapsed: true,
            items: [
              { text: "介绍", link: "/Vue/introduction" },
              { text: "Vue生命周期", link: "/Vue/lifeCycle" },
              { text: "vue2和vue3", link: "/Vue/vue2comparevue3" },
              { text: "Vue3.6.0", link: "/Vue/Vue3.6.0" },
            ],
          },
          {
            text: "UiLibray",
            collapsed: true,
            items: [
              { text: "介绍", link: "/UiLibary/introduction" },
              { text: "FileUpload", link: "/UiLibary/FileUpload" },
            ],
          },

          {
            text: "配置文件",
            collapsed: true,
            items: [{ text: "config", link: "/Config/index" }],
          },
        ],
      },
    ],

    outline: {
      level: "deep", // 可选的标题级别
      label: "页面导航", // 自定义标题
    },

    socialLinks: [
      { icon: "gitee", link: "https://gitee.com/LvMengZhen-Mango/skill-docs" },
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
