import type { Config } from "tailwindcss";

export default {
  content: [
    // 扫描 VitePress 相关文件
    "./docs/**/*.{md,vue}",
    "./docs/.vitepress/**/*.{ts,js,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
