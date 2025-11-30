<script setup>
const obj1 = {
  obj1: 1
}
const obj = {
  a: 1,
  b: obj1,
  d: 3,
  i: obj1,
}


function deepClone(obj, hash = new WeakMap()) {
  // 处理基本类型和 null
  if (obj === null || typeof obj !== 'object') return obj;

  // 处理循环引用
  if (hash.has(obj)) return hash.get(obj);

  // 处理特殊对象类型
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Map) return new Map(Array.from(obj, ([k, v]) => [deepClone(k, hash), deepClone(v, hash)]));
  if (obj instanceof Set) return new Set(Array.from(obj, v => deepClone(v, hash)));

  // 处理数组和普通对象
  const clone = obj instanceof Array ? [] : {};
  hash.set(obj, clone);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], hash);
    }
  }

  return clone;
}


const newObj = deepClone(obj)

// console.log(newObj)

var arr = [1, 2, 3];
// forEach
arr.forEach((item, index, array) => {
  console.log(item, index, array);
  // 1 0 [1, 2, 3, 4, 5] 2 1 [1, 2, 3, 4, 5] 3 2 [1, 2, 3, 4, 5]
});

const mapArr = arr.map((item, index, array) => {
  return item * 2;
  // [2, 4, 6]
});

const filterArr = arr.filter((item, index, array) => {
  return item > 2;
  // [3]
});

const reduceArr = arr.reduce((prev, item, index, array) => {
  return prev + item;
  // 6
}, 0);

const someArr = arr.some((item, index, array) => {
  return item > 2;
  // true
});

const everyArr = arr.every((item, index, array) => {
  return item > 2;
  // false
});


console.log(mapArr)

console.log(filterArr)

console.log(reduceArr)

console.log(someArr)

console.log(everyArr)


const JsonObj = { name: "jack", age: 18 };
const jsonString = JSON.stringify(JsonObj);
const newJsonObj = JSON.parse(jsonString);

console.log(jsonString)
console.log(newJsonObj)



</script>

<template>
  <div class="test">ctrl shift i</div>
</template>

<style scoped lang="scss"></style>
