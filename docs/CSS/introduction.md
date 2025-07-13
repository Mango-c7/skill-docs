# 什么是 CSS？

CSS（Cascading Style Sheets，层叠样式表）是用于描述 HTML 或 XML 文档样式的样式表语言。它控制网页的外观和布局，实现内容与表现的分离。

## 核心特点

1. **样式与结构分离**：CSS 将样式与 HTML 内容分离，使得网页的结构和样式可以独立修改，提高了代码的可维护性和可读性。
2. **层叠性**：CSS 允许样式表中的规则相互覆盖，优先级高的规则会覆盖优先级低的规则。
3. **继承性**：某些 CSS 属性会自动继承父元素的值，无需显式设置。
4. **响应式**：支持不同设备和屏幕尺寸的适配，实现响应式设计。
5. **模块化**：可以将样式分为多个文件，通过@import 或 link 标签引入，实现样式的模块化管理和复用。
6. **浏览器兼容性**：CSS 具有良好的浏览器兼容性，但不同浏览器对某些 CSS 属性的支持程度可能有所不同。
7. **动画和交互**：CSS3 引入了动画和交互功能，如过渡、变换、动画等，使网页更加生动和交互性更强。
8. **可访问性**：CSS 可以帮助提高网页的可访问性，如使用适当的颜色对比、字体大小等，使网页对视觉障碍用户友好。
9. **跨平台**：CSS 可以在多种平台上运行，如桌面浏览器、移动设备、智能手表等。
10. **标准化**：CSS 是由 W3C（World Wide Web Consortium，万维网联盟）制定的标准化语言，得到了广泛的支持和认可。
11. **灵活性**：CSS 允许开发者通过选择器、属性和值等灵活地定义样式，实现丰富的视觉效果和布局效果。
12. **CSS 变量**：CSS 变量可以在全局范围内定义和使用，方便样式的复用和管理。可以轻松实现主题切换。

## CSS 的痛点

1. **代码冗余**：在编写 CSS 时，可能会出现重复的代码，导致代码冗余，影响代码的可维护性。
2. **维护成本高**：随着项目规模的扩大，CSS 代码量也会增加，维护成本也会相应提高。
3. **样式冲突**：在多个样式表或组件中，可能会出现样式冲突，导致样式表现不符合预期。
4. **样式覆盖**：在编写 CSS 时，可能会出现样式覆盖的问题，导致样式表现不符合预期。
5. **样式复用性差**：在编写 CSS 时，可能会出现重复的样式代码，导致样式复用性差，影响代码的可维护性。
6. **样式难以调试**：在编写 CSS 时，可能会出现样式难以调试的问题，导致样式表现不符合预期。

## CSS 痛点解决方案

导致这些问题的主要原因就如它的名字一样**层叠样式表**，CSS 的层叠性导致样式难以管理，样式覆盖等问题。你会发现在一个稍微复杂的项目中，CSS 的代码量会变得非常庞大，维护起来非常困难。你的变量名会越来越长，选择器会越来越复杂，样式表会越来越难以维护。

1. **BEM 规范**：BEM（Block Element Modifier）是一种 CSS 命名规范，通过将样式分为块（Block）、元素（Element）和修饰符（Modifier）来提高代码的可维护性和可读性。
2. **CSS 预处理器**：CSS 预处理器如 Sass、Less 等，提供了变量、混合（Mixin）、函数等高级功能，使 CSS 代码更加模块化和可维护。
3. **CSS 框架**：CSS 框架如 Bootstrap、**Tailwind CSS**、 CSS-in-JS（styled-components） 等，提供了一套完整的样式库和组件，可以快速搭建响应式网页。
4. **CSS 模块化**：将 CSS 代码拆分为多个模块，每个模块负责一个功能或组件的样式，通过模块化管理和复用，提高代码的可维护性。 使用方式：在文件名后加 .module.css 后缀

## 个人喜好

个人喜欢使用 Tailwind CSS 的原子化类，通过组合这些类来实现样式的定制。开发效率高，代码简洁，可维护性高。

## Tailwind CSS Dome

<section class="h-20 mt-[10px]">
  <div class="p-4 bg-blue-500 text-white rounded-lg">
    这是一个 Tailwind CSS 样式测试！
  </div>
</section>

```html
<div class="p-4 bg-blue-500 text-white rounded-lg">
  这是一个 Tailwind CSS 样式测试！
</div>
```

- [tailwindcss](https://tailwindcss.com/)

## 传统 CSS Dome

<section class="h-20 mt-[10px]">
  <div class="p-4 bg-blue-500 text-white rounded-lg">
    这是一个传统 CSS 样式测试！
  </div>
</section>

```html
<style>
  .p-all {
    padding: 1rem;
  }
  .bg-color {
    background-color: #3b82f6;
  }

  .text-color {
    color: #fff;
  }

  .black-r {
    border-radius: 0.75rem;
  }
</style>
<div class="p-all bg-color text-color black-r">这是一个传统 CSS 样式测试！</div>
```

## 参考资料

- [MDN Web Docs - CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
- [W3C CSS 规范](https://www.w3.org/Style/CSS/)
