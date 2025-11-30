# ESModule

## 1. 概述

ESModule 是 ECMAScript 2015（ES6）引入的模块化规范，它允许开发者将代码组织成可重用的模块，并在其他地方导入和使用这些模块。

ESModule 的主要特点包括：

- 使用 `import` 和 `export` 语句来导入和导出模块。
- 模块是静态的，即在编译时解析模块依赖关系，而不是在运行时解析。
- 模块具有作用域，模块内部的变量和函数只能在模块内部使用。
- 模块可以异步加载，使用 `import()` 函数来动态加载模块。
- 模块可以导出多个值，也可以导入多个值。
- 模块可以导出默认值，也可以导入默认值。
- 模块可以导出命名值，也可以导入命名值。
- 模块可以导出对象，也可以导入对象。
- 模块可以导出函数，也可以导入函数。

```js
//  1. 解析模块
//  2. 加载模块
//  3. 执行模块
```

## ESModule 和 CommonJs 的区别

- ESModule 是官方规范，CommonJS 是社区规范。
- ESModule 是静态的，CommonJS 是动态的。
- ESModule 是编译时解析模块依赖关系，CommonJS 是运行时解析模块依赖关系。
- ESModule 支持异步加载，CommonJS 不支持异步加载。
- ESModule 支持导出多个值，CommonJS 只支持导出一个值。 module.exports

```js
// module.js 导出
export const name = "zhangsan";
export function sayHello() {
  console.log("hello");
}
export default function sayHi() {
  console.log("hi");
}

const nickName = "zhangsan";
const sex = "male";
export { nickName, sex };

// main.js 导入

// 剧名导入
import { name, sayHello } from "./module.js";
// 默认导入

import sayHi from "./module.js";
// 剧名导入
import { nickName, sex } from "./module.js";
// 整体导入
import * as module from "./module.js";

console.log(name); // zhangsan
sayHello(); // hello
sayHi(); // hi

console.log(nickName); // zhangsan
console.log(sex); // male

console.log(module.name); // zhangsan
module.sayHello(); // hello
module.sayHi(); // hi
module.nickName; // zhangsan
module.sex; // male
```

## 2. 使用

### 2.1 导出
