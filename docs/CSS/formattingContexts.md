# 什么是格式化上下文？

格式化上下文（Formatting Context）是 CSS 视觉渲染的一部分，它决定了元素如何定位、相互影响以及如何与外部元素交互的布局环境。不同类型的格式化上下文有不同的布局规则。

## 块级格式化上下文 (BFC - Block Formatting Context)

块级格式化上下文是页面中的一块独立的渲染区域，它决定了块级元素如何布局。BFC 内部的元素不会影响到外部元素，反之亦然。BFC 的创建方式包括：

```css
display: flow-root; /* 最干净的BFC创建方式 */
overflow: hidden/auto/scroll;
float: left/right;
position: absolute/fixed;
display: inline-block/table-cell/table-caption;
```

BFC 的主要特性包括：

- 内部盒子垂直排列
- 块级元素的宽度默认会自动填满其父容器的宽度。
- 不会与浮动元素重叠
- 独立于外部元素

## 内联格式化上下文 (IFC - Inline Formatting Context)

行内格式化上下文是页面中的一块渲染区域，它决定了行内元素如何布局。IFC 内部的元素会在水平方向上依次排列，并从左到右排列。IFC 的创建方式包括：

- 包含行内元素的块级元素
- 行内元素（如 `<span>`、`<a>` 等）

IFC 的主要特性包括：

- 行内元素会在水平方向上依次排列，并从左到右排列。
- 行内元素的宽度由其内容决定。
- 行内元素不会自动换行，除非遇到 `<br>` 标签或父容器的边界。

## 弹性格式化上下文 (FFC - Flex Formatting Context)

- 由 display: flex 创建
- 子元素成为弹性项目(flex item)
- 提供强大的单维布局能力

## 网格格式化上下文 (GFC - Grid Formatting Context)

- 由 display: grid 创建
- 子元素成为网格项目(grid item)
- 提供强大的二维布局能力

## 格式化上下文的作用

- 隔离布局：不同格式化上下文中的元素不会相互影响

- 控制浮动：BFC 可以包含浮动元素，防止高度塌陷

- 阻止外边距合并：相邻块级元素在同一个 BFC 中会发生外边距合并

- 独立渲染：每个格式化上下文独立计算布局

## 总结

格式化上下文是 CSS 布局的核心概念之一，它决定了元素如何布局以及如何与其他元素交互。理解不同类型的格式化上下文及其特性，可以帮助我们更好地控制页面布局，解决布局问题。

## 参考

- [MDN - Formatting Context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Visual_formatting_model)
- [CSS 格式化上下文](https://www.w3.org/TR/CSS21/visuren.html#block-formatting)
