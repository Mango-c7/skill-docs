# 什么是语义化标签？

语义化标签是指具有明确含义和用途的 HTML 标签，它们不仅能告诉浏览器如何显示内容，还能清晰地表达内容的结构和意义。

## 为什么要使用语义化标签？

1. **更好的可访问性**：屏幕阅读器能更好地理解页面结构
2. **更利于 SEO**：搜索引擎更容易理解页面内容
3. **代码更易维护**：结构清晰，便于团队协作
4. **更好的兼容性**：对未来新设备和浏览器更友好
5. **特殊人群**：如视障用户，通过屏幕阅读器能更好地获取信息

## 文档结构标签

1. `<header>`：定义文档或节的头部
2. `<nav>`：定义导航链接的部分
3. `<main>`：定义文档的主要内容
4. `<section>`：定义文档中的一个节
5. `<article>`：定义独立的、自包含的内容块
6. `<aside>`：定义侧边栏内容
7. `<footer>`：定义文档或节的尾部

## 内容语义标签

1. `<h1>` - `<h6>`：定义标题
2. `<p>`：定义段落
3. `<ul>`、`<ol>`、`<li>`：定义列表
4. `<dl>`、`<dt>`、`<dd>`：定义描述列表
5. `<figure>`、`<figcaption>`：定义图片和其标题
6. `<blockquote>`：定义引用
7. `<cite>`：定义引用的来源
8. `<code>`：定义代码片段
9. `<pre>`：定义预格式化的文本
10. `<details>`、`<summary>`：定义可展开的内容
11. `<dialog>`：定义对话框

## 多媒体标签

1. `<img>`：定义图片
2. `<audio>`：定义音频
3. `<video>`：定义视频

## 表单相关标签

1. `<form>`：定义表单
2. `<input>`：定义输入字段
3. `<textarea>`：定义文本域
4. `<select>`、`<option>`：定义下拉列表
5. `<button>`：定义按钮

## 其他常用标签

1. `<hr>`：定义水平线
2. `<br>`：定义换行
3. `<a>`：定义超链接
4. `<strong>`、`<em>`：定义强调文本
5. `<abbr>`：定义缩写
6. `<time>`：定义时间

## 最佳实践

### 下拉效果

<section class="h-20 mt-[10px]">
  <select>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</section>

#### 示例

```html
<select>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
```

### 展开效果

<section class="h-20 mt-[10px]">
  <details>
    <summary>展开</summary>
    <p>这是展开的内容</p>
  </details>
</section>

#### 示例

```html
<details>
  <summary>展开</summary>
  <p>这是展开的内容</p>
</details>
```

### 图片的懒加载效果

<section class="h-[300px] mt-[10px]">
  <img src="https://picsum.photos/300" loading="lazy" alt="Lazy Image">
</section>

#### 示例

```html
<img src="https://picsum.photos/300" loading="lazy" alt="Lazy Image" />
```

### dialog 弹窗效果

<section class="h-[300px] mt-[10px]">
  <dialog open>
    <p>Greetings, one and all!</p>
    <form method="dialog">
      <button>OK</button>
    </form>
  </dialog>
</section>

#### 示例

```html
<section class="h-[300px] mt-[10px]">
  <dialog open>
    <p>Greetings, one and all!</p>
    <form method="dialog">
      <button>OK</button>
    </form>
  </dialog>
</section>
```
