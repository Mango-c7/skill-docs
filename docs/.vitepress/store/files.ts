import { ComputedRef } from "vue";

export interface CardItem {
  icon?: string;
  link?: boolean | string;
  linkTarget?: string;
  title?: string | ComputedRef<string> | (() => string);
  details?: string;
  active?: boolean;
}

export const projectList: CardItem[] = [
  {
    title: "极物圈社区商城",
    icon: "/index/jiwuquan.png",
    link: "/项目/极物圈",
    details: "极物圈，是一个集商城、ai聊天、沟通、社区功能于一体的平台。",
  },
  {
    title: "极物聊天 | JiwuChat",
    icon: "/index/jiwuchat-tauri.webp",
    link: "/项目/极物聊天",
    details:
      "Jiwu聊天应用，是一个AI聊天、社交功能于一体的Tauri多端应用，支持Android、iOS、Windows、MacOS、Linux、Web等多平台。",
  },
  {
    title: "悦读时光 | Read Joy",
    icon: "/index/read-joy.png",
    link: "/项目/悦读时光",
    details:
      "悦读时光，一个简约而不简单的阅读平台。无论您是书籍爱好者，还是寻找灵感的创作者，这里都能满足您的需求。",
  },
  {
    title: "Hamburger Harmony APP",
    icon: "/index/kiwi-burger.png",
    link: "/项目/Hamburger Harmony APP",
    details:
      "仿麦当劳，一个基于HarmonyOS的应用，可以实现汉堡商品购买、订单管理、个人中心等功能。",
  },
  {
    title: "MSI",
    linkTarget: "_blank",
    icon: "https://www.apple.com/favicon.ico",
    link: "https://github.com/KiWi233333/MSI-GS66-Stealth-OC-Hackintosh-opencore/releases/tag/1.0.1",
    details: "微星GS66黑苹果EFI文件，支持macOS Big Sur 11.4",
  },
  {
    title: "简约博客",
    linkTarget: "_blank",
    icon: "/kiwi-fruit.svg",
    link: "https://blogs.kiwi233.top/",
    details:
      "H5C3、JavaScript、jQuery、Bootstrap5 构建的响应式简约静态博客网站",
  },
];
