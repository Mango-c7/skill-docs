# 什么是包含块？

包含块(Containing Block)是 CSS 中一个元素用来计算和定位其自身及子元素的矩形区域。它决定了元素的百分比宽度、定位偏移量等属性的计算基准。

## 包含块的计算规则

包含块的计算规则如下：

1. 根元素的包含块是初始包含块(initial containing block)，它的大小等于视口(viewport)的大小。
2. 对于非根元素，其包含块的计算规则如下：（简称-夫相子绝）
   - 如果元素的 position 属性值为 static 或 relative，则包含块为最近的祖先元素，该祖先元素的 position 属性值不为 static。
   - 如果元素的 position 属性值为 absolute，则包含块为最近的祖先元素，该祖先元素的 position 属性值不为 static，且该祖先元素是一个定位元素(即 position 属性值不为 static)。如果找不到这样的祖先元素，则包含块为初始包含块（视口）。
3. 如果元素的 position 属性值为 fixed，
   - 包含块：初始包含块（视口）。
   - 例外情况：如果元素具有 transform、perspective 或 filter 属性，则可能改变包含块
4. 粘性定位元素(sticky)
   - 包含块：最近的滚动容器的内容区域

### 百分比 Demo

<section class="mt-[10px]">
  <div class="relative w-[200px] h-[200px] bg-red-500">
    <div class="absolute w-[50%] h-[50%] bg-blue-500">
    </div>
  </div>
</section>

```html
<div class="relative w-[200px] h-[200px] bg-red-500">
  <div class="absolute w-[50%] h-[50%] bg-blue-500"></div>
</div>
```

### 绝对定位 Demo

<section class="mt-[10px]">
  <div class="relative w-[200px] h-[200px] bg-red-500">
    <div class="absolute w-[50%] h-[50%] bg-blue-500">
      <div class="absolute w-[50%] h-[50%] bg-green-500">
      </div>
    </div>
  </div>
</section>

```html
<div class="relative w-[200px] h-[200px] bg-red-500">
  <div class="absolute w-[50%] h-[50%] bg-blue-500">
    <div class="absolute w-[50%] h-[50%] bg-green-500"></div>
  </div>
</div>
```

### 固定定位 Demo

 <!-- <div class="fixed w-[50%] h-[50%] bg-green-500 top-0 left-0"></div> -->

```html
<!-- 这里就不做演示了，因为固定定位的包含块是视口 -->

<!-- <div class="fixed w-[50%] h-[50%] bg-green-500 top-0 left-0"></div> -->
```

### 粘性定位 Demo

<section class="mt-[10px]">
  <div class="relative w-[200px] h-[200px] bg-red-500 overflow-y-scroll">
    <div class="h-[10px]"></div>
    <div class="sticky w-[50%] h-[50%] bg-blue-500 top-0 left-0"></div>
    <div class="h-[1000px]"></div>
  </div>
</section>

```html
<div class="relative w-[200px] h-[200px] bg-red-500 overflow-y-scroll">
  <div class="h-[10px]"></div>
  <div class="sticky w-[50%] h-[50%] bg-blue-500 top-0 left-0"></div>
  <div class="h-[1000px]"></div>
</div>
```

### 参考

- [MDN - 包含块](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Containing_block)
