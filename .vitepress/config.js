// .vitepress/config.js
export default {
  title: 'Your Site',
  description: 'Your description',

  // 关键配置：设置基础路径
  base: '/', // 如果部署到域名根目录
  // 如果部署到子目录，比如 https://domain.com/blog/
  // base: '/blog/', 

  // 构建输出配置
  vite: {
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            if (assetInfo.name.endsWith('.css')) {
              return 'assets/css/[name]-[hash][extname]';
            }
            return 'assets/[name]-[hash][extname]';
          }
        }
      }
    }
  }
}