# Vue

Vue.js 是一个渐进式 JavaScript 框架，用于构建用户界面（UI）。它由尤雨溪（Evan You）于 2014 年发布，并迅速成为最受欢迎的前端框架之一，与 React 和 Angular 并称“前端三大框架”。

## 🌟 Vue 的核心特点

1. 渐进式框架

- Vue 可以逐步集成到项目中，既可用于增强静态页面，也可构建复杂的单页应用（SPA）。

- 你可以只使用 Vue 的核心功能（如数据绑定），或结合 Vue Router、Vuex/Pinia 等生态工具构建完整应用。

2. 响应式数据绑定

- Vue 采用数据劫持 + 依赖收集的方式实现响应式。

- 当数据变化时，视图自动更新，无需手动操作 DOM。

```html
<div id="app">
  {{ message }}
  <!-- 数据绑定 -->
</div>
<script>
  const app = new Vue({
    el: "#app",
    data: { message: "Hello Vue!" },
  });
</script>
```

3. 组件化开发（SFC）Single File Components

- 将 UI 拆分为可复用的组件，每个组件包含自己的模板、逻辑和样式。

```vue
<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue SFC!",
    };
  },
};
</script>

<style scoped>
div {
  color: blue;
}
</style>
```

4. 虚拟 DOM

- Vue 通过虚拟 DOM 高效更新真实 DOM，提升性能。

- 结合 Diff 算法，最小化 DOM 操作。

5. 丰富的生态系统

- Vue Router：单页应用路由管理。

- Vuex/Pinia：状态管理。

- Vite Vue CLI：项目脚手架。

## 🚀 Vue 的版本演进

1. Vue 2（2016-2023）

- Options API（data, methods, computed 等选项）。

- 响应式基于 Object.defineProperty，不支持数组的部分方法。

1. Vue 3（2020 至今） `推荐`

- Composition API（setup 函数）。
- 基于 Proxy 的响应式系统，支持数组和对象。
- 性能优化，如编译时优化、Tree Shaking 等。
- 更好的 TypeScript 支持。

## 📊 Vue 与其他框架对比

| React 特性          | Vue 3 对应方案                       | 是否支持 | 差异说明             |
| ------------------- | ------------------------------------ | -------- | -------------------- |
| JSX/TSX             | `JSX` /`TSX`                         | ✅ 支持  | Vue 推荐模板语法 SFC |
| useState, useEffect | ` ref` `reactive` `watch` `computed` | ✅ 支持  | Vue 响应式系统不同   |
| Context API         | `provide` `inject`                   | ✅ 支持  | Vue 需要赖依赖注入   |
| React.memo          | `defineComponent` +`v-memo`          | ✅ 支持  | Vue 的优化渲染       |
| useReducer          | `Pinia` /`Vuex`                      | ⚠️ 手动  | Vue 脚手架一键安装   |
| React.memo          | `defineComponent` +`v-memo`          | ✅ 支持  | Vue 的优化渲染       |
| Portals             | `<Teleport>`                         | ✅ 支持  | 功能相同，语法不同   |
| Error Boundaries    | `onErrorCaptured`                    | ✅ 支持  | Vue 也错误捕获机制   |
| Fiber 架构          | ` Proxy 的响应式系统`                | ✅ 支持  | Vue 性能优秀         |

总结

- Vue 3 覆盖了 React 80%+ 的核心功能，但实现方式不同（如响应式 vs Hooks）。
- React 在并发渲染和不可变数据方面更先进，而 Vue 3 在开发体验和响应式系统上更简洁。

## 🔥 Vue 的适用场景

- 快速原型开发：简洁的模板语法适合快速迭代。

- 中小型项目：轻量级、学习曲线平缓。

- 企业级应用：结合 Vue 3 + TypeScript + Pinia 可维护性强。

- 静态站点：通过 VitePress 或 Nuxt.js 生成。

tips:

本站点就是用的 `VitePress`

## 📚 Vue 学习资源

- 官方文档：[Vue.js](https://vuejs.org/)
