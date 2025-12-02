# Pinia

## 1. Pinia 是什么

Pinia 是 Vue 的存储库，它允许您跨组件共享状态。Pinia 是 Vue 的官方状态管理库，它提供了更简单、更灵活的状态管理方式，并且与 Vue 3 完全兼容。

## Pinia 的优势

- 更简单、更灵活的状态管理方式
- 与 Vue 3 完全兼容
- 支持模块化、可扩展的状态管理
- ref() 就是 state 属性
- computed() 就是 getters
- function() 就是 actions

```js
// index.vue import { ref } from 'vue' import { storeToRefs } from 'pinia'
import { useTodos } from './todos.js'
const todosStore = useTodos()
const {filter, filteredTodos } = storeToRefs(todosStore)
const newTodoText = ref('')
function addTodo() {
  if (!newTodoText.value) { return }
  todosStore.addTodo(newTodoText.value) newTodoText.value = ''
}

<template>
  <label><input v-model="filter" type="radio" value="all" /> All</label>
  <label
    ><input v-model="filter" type="radio" value="finished" /> Finished</label
  >
  <label
    ><input v-model="filter" type="radio" value="unfinished" />
    Unfinished</label
  >
  <hr />
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input v-model="todo.isFinished" type="checkbox" />
      {{ todo.text }}
    </li>
  </ul>
  <label>
    New Todo:
    <input v-model="newTodoText" type="text" @keypress.enter="addTodo" />
  </label>
  <button :disabled="!newTodoText" @click="addTodo">Add</button>
</template>
```

```js
// todos.js
import { defineStore } from "pinia";

export const useTodos = defineStore("todos", {
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    todos: [],
    /** @type {'all' | 'finished' | 'unfinished'} */
    filter: "all",
    // 类型将自动推断为 number
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      // 自动补全！ ✨
      return state.todos.filter((todo) => todo.isFinished);
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished);
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredTodos(state) {
      if (this.filter === "finished") {
        // 调用其他带有自动补全的 getters ✨
        return this.finishedTodos;
      } else if (this.filter === "unfinished") {
        return this.unfinishedTodos;
      }
      return this.todos;
    },
  },
  actions: {
    // 接受任何数量的参数，返回一个 Promise 或不返回
    addTodo(text) {
      // 你可以直接变更该状态
      this.todos.push({ text, id: this.nextId++, isFinished: false });
    },
  },
});
```
