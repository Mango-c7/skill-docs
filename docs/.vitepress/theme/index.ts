// https://vitepress.dev/guide/custom-theme
import { h, onMounted } from "vue";
import { useRouter } from "vitepress";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import "./tailwind.css"; // 导入 Tailwind

// 导入 medium-zoom 自定义图片预览插件
import mediumZoom from "medium-zoom";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  setup() {
    const router = useRouter();
    const initZoom = () => {
      console.log(window.location.pathname);
      mediumZoom(".main img:not(.no-zoom)", { background: "rgba(0,0,0,0.8)" });
    };

    onMounted(() => {
      initZoom();
      router.onAfterRouteChange = () => {
        setTimeout(initZoom, 100); // 确保 DOM 更新完成
      };
    });
  },
  // enhanceApp({ app, router, siteData }) {
  //   console.log(siteData, app, router);
  //   // ...
  // },
} satisfies Theme;
