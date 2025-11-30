# ES5 (2009) - 现代 JavaScript 的基石

![image](../public/EsFeatures.png)

| ES   | 数组                                             | 其他                                                                                                                                           |
| ---- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| ES5  | `forEach` `map` `filter` `reduce` `some` `every` | `"use strict"` `JSON.parse` `defineProperty` `函数绑定`                                                                                        |
| ES6  |                                                  | ` let 和 const``箭头函数 => ` `模板字符串` `解构赋值` `Class` `模块系统` `Promise` `迭代器和生成器` `默认参数和剩余参数` `对象字面量` `Symbol` |
| ES7  | `includes`                                       | `指数运算符` `async/await` `Object.values` `Object.entries` `String.padStart` `String.padEnd`                                                  |
| ES9  |                                                  | `异步迭代` `Promise.finally` `对象扩展运算符` `正则表达式增强`                                                                                 |
| ES10 | `数组扁平化`                                     | `Object.fromEntries` `String.trimStart` `String.trimEnd` `catch`                                                                               |
| ES11 | `pending` `fulfilled` `rejected`                 | `空值合并运算符 ??` `可选链操作符 ?.` `BigInt` `动态导入` `globalThis`                                                                         |

## ES5

### es5 数组方法

```js
var arr = [1, 2, 3];
// forEach
arr.forEach((item, index, array) => {
  console.log(item, index, array);
  // 1 0 [1, 2, 3, 4, 5] 2 1 [1, 2, 3, 4, 5] 3 2 [1, 2, 3, 4, 5]
});

// map
arr.map((item, index, array) => {
  return item * 2;
  // [2, 4, 6]
});

// filter
arr.filter((item, index, array) => {
  return item > 2;
  // [3]
});

// reduce
arr.reduce((prev, item, index, array) => {
  return prev + item;
  // 6
}, 0);

// some
arr.some((item, index, array) => {
  return item > 2;
  // true
});

// every
arr.every((item, index, array) => {
  return item > 2;
  // false
});
```

### es5 其他

```js
// "use strict"
"use strict";

// JSON.parse
const JsonObj = { name: "jack", age: 18 };
const jsonString = JSON.stringify(JsonObj); //{"name":"jack","age":18}
const newJsonObj = JSON.parse(jsonString); //{name: "jack", age: 18}

// 可以直接使用 JSON.parse 和 JSON.stringify来进行深拷贝
// 但是不能拷贝函数，不能拷贝 undefined，不能拷贝 Symbol，不能拷贝循环引用

// defineProperty
Object.defineProperty(obj, "key", {
  value: "static",
  writable: false,
  enumerable: true,
  configurable: true,
});

// 函数绑定
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
};
var bar = foo.bind(obj); // bar 函数的 this 指向 obj
bar(); // 2
```

## ES6

### es6 数组方法

```js
const arr = [1, 2, 3];
// includes
arr.includes(1); // true
arr.includes(4); // false
```

### es6 其他

```js
// let 和 const
let a = 1;
const b = 2;

// 箭头函数
const foo = (a, b) => {
  return a + b;
};

// 模板字符串
const name = "jack";
const age = 18;
const str = `my name is ${name}, i'm ${age} years old.`;

// 解构赋值
const obj = { name: "jack", age: 18 };
const { name, age } = obj;

// Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`my name is ${this.name}, i'm ${this.age} years old.`);
  }
}
const person = new Person("jack", 18);
person.sayHello();

// 模块系统
import { foo } from "./foo.js";
export { foo };

// Promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 1000);
});
promise.then((res) => {
  console.log(res);
});

// 迭代器和生成器
const iterator = foo[Symbol.iterator]();
iterator.next();
iterator.next();

// 默认参数和剩余参数
function foo(a = 1, b = 2, ...args) {
  console.log(a, b, args);
}
foo(3, 4, 5, 6, 7);

// 对象字面量
const obj = {
  name: "jack",
  age: 18,
  sayHello() {
    console.log(`my name is ${this.name}, i'm ${this.age} years old.`);
  },
};

// Symbol
const sym = Symbol("foo");
const sym2 = Symbol("foo");
sym === sym2; // false

// Set
const set = new Set([1, 2, 3, 4, 5]);
set.add(6);
set.delete(1);
set.has(2);
set.size;
set.clear();

// Map
const map = new Map();
map.set("name", "jack");
map.set("age", 18);
map.get("name");
map.has("age");
map.delete("age");
map.size;
map.clear();

// WeakSet
const weakSet = new WeakSet();
const obj = { name: "jack", age: 18 };
weakSet.add(obj);
weakSet.delete(obj); // WeakSet 不能遍历
```

## ES7

### es7 数组方法

```js
const arr = [1, 2, 3];
// includes
arr.includes(1); // true
arr.includes(4); // false
```

### es7 其他

```js
// 指数运算符
const a = 2;
const b = 3;
const c = a ** b; // 8

// async/await
async function foo() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  console.log(data);
}
foo();

// Object.values
const obj = { name: "jack", age: 18 }; // ["jack", 18]
const values = Object.values(obj);

// Object.entries
const obj = { name: "jack", age: 18 }; // [["name", "jack"], ["age", 18]]
const entries = Object.entries(obj);

// Object.getOwnPropertyDescriptors
const obj = { name: "jack", age: 18 };
const descriptors = Object.getOwnPropertyDescriptors(obj);
```

<script setup lang="ts">
  import Test from '../test/index.vue'
</script>

<Test />
