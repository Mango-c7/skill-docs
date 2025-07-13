---
prev: false
next:
  text: "语义化标签"
  link: "/HTML/semanticization"
---

# 什么是 HTML？

HTML（HyperText Markup Language，超文本标记语言）是用于创建网页的标准标记语言。它通过一系列标签（tags）来定义网页的结构和内容。

## 核心特点

1. **标记语言**：不是编程语言，而是用于描述内容的语言
2. **平台无关**：可在任何设备和浏览器上运行
3. **与 CSS/JS 配合**：通常与 CSS（样式）和 JavaScript（行为）共同使用
4. **标准**：HTML 是由万维网联盟（W3C）制定的全球标准，确保了网页在不同浏览器和设备上的兼容性。

## HTML 基本结构

1. **`<!DOCTYPE html>`**：声明文档类型和版本，告诉浏览器这是一个 HTML5 文档
2. **`<html>`**：根元素，包裹整个 HTML 文档
3. **`<head>`**：包含文档的元数据，如字符集、标题、样式和脚本
4. **`<meta charset="UTF-8">`**：指定文档的字符编码
5. **`<title>`**：定义文档的标题，显示在浏览器标签上
6. **`<body>`**：包含可见的网页内容，如文本、图片、视频等
7. **`<h1>`**：定义一级标题
8. **`<p>`**：定义段落

## 示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <title>页面标题</title>
  </head>
  <body>
    <h1>我的第一个标题</h1>
    <p>我的第一个段落。</p>
  </body>
</html>
```
