# JavaScript 简介

JavaScript 是一种轻量级的解释型编程语言，主要用于网页开发，使网页具有交互性。它是现代 Web 开发的三大核心技术之一（另外两个是 HTML 和 CSS）。

## JavaScript 历史

JavaScript 诞生于 1995 年，由 Netscape 公司的 Brendan Eich 开发。最初，JavaScript 被称为 LiveScript，后来为了蹭 Java 的热度，更名为 JavaScript。

## JavaScript 特点

1. **解释型语言**：JavaScript 是一种解释型语言，不需要编译，可以直接在浏览器中运行。
2. **跨平台**：JavaScript 可以在多种浏览器和操作系统上运行，如 Windows、Mac、Linux 等。
3. **面向对象**：JavaScript 支持面向对象编程，可以使用类和对象。

## JavaScript 应用

JavaScript 主要用于网页开发，包括以下几个方面：

1. **网页交互**：通过 JavaScript，可以实现网页的动态效果，如表单验证、动画效果等。
2. **数据交互**：通过 JavaScript，可以实现网页与服务器之间的数据交互，如 AJAX 技术。
3. **移动应用开发**：通过 JavaScript，可以实现移动应用的开发，如 React Native、Cordova 等。

## JavaScript 与其他语言的区别

JavaScript 与其他编程语言（如 Java、C++、Python 等）的主要区别在于：JavaScript 是一种解释型语言，不需要编译，可以直接在浏览器中运行；而其他语言通常需要编译成字节码或机器码才能运行。

## 基本语法

```js
// 变量声明
var x = 10; //不推荐
let message = "Hello, World!";
const PI = 3.14159;

// 函数
function greet(name) {
  return `Hello, ${name}!`;
}

// 对象
const person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log(`My name is ${this.name}`);
  },
};

// 类 (ES6+)
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
```
