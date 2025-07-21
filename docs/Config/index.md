---
outline: deep
---

# Runtime API Examples

这个页面演示了一些由 VitePress 提供的运行时 api 的用法。

`useData()`API 可用于访问当前页面的网站、主题和页面数据。它适用于`.md`和 `.vue`文件：

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## 配置文件

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## 配置文件

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>

## 更多

查看文档 [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
