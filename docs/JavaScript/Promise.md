# Promise 介绍

Promise A+规范

| Promise   |                                  |
| --------- | -------------------------------- |
| 状态      | `pending` `fulfilled` `rejected` |
| then 方法 | `pending` `fulfilled` `rejected` |

```js
function runMicroTask(cb) {
  // 事件循环 微任务队列文章有介绍
  queueMicrotask(cb);
}

function isPromise(obj) {
  // PromiseA+ 规范
  return !!(obj && typeof obj === "object" && typeof obj.then === "function");
}
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class MyPromise {
  constructor(executor) {
    this._state = PENDING;
    this._value = undefined;
    this._executor_queue = [];
    try {
      executor(this._resolve.bind(this), this._reject.bind(this));
    } catch (error) {
      this._reject(error);
    }
  }
  _changeState(state, value) {
    if (this._state !== PENDING) {
      return;
    }
    this._state = state;
    this._value = value;
    this._runExecutorFn();
  }
  _resolve(data) {
    this._changeState(FULFILLED, data);
  }

  _reject(reason) {
    this._changeState(REJECTED, reason);
  }
  _addExecutorFn(executor, state, resolve, reject) {
    this._executor_queue.push({
      executor,
      state,
      resolve,
      reject,
    });
  }
  _runExecutorFn() {
    if (this._state === PENDING) {
      return;
    }
    while (this._executor_queue[0]) {
      this._runOneExecutorFn(this._executor_queue[0]);
      this._executor_queue.shift();
    }
  }

  _runOneExecutorFn({ executor, state, resolve, reject }) {
    if (this._state !== state) {
      // 状态不对，直接返回
      return;
    }
    if (typeof executor !== "function") {
      // executor 不是函数，根据状态来决定 resolve 还是 reject
      this._state === FULFILLED ? resolve(this._value) : reject(this._value);
      return;
    }
    try {
      // 加入微队列，保证异步执行
      runMicroTask(() => {
        const result = executor(this._value);
        if (isPromise(result)) {
          result.then(resolve, reject);
        } else {
          resolve(result);
        }
      });
    } catch (error) {
      reject(error);
    }
  }

  then(onFULFILLED, onREJECTED) {
    return new MyPromise((resolve, reject) => {
      this._addExecutorFn(onFULFILLED, FULFILLED, resolve, reject);
      this._addExecutorFn(onREJECTED, REJECTED, resolve, reject);
      this._runExecutorFn();
    });
  }

  catch(onREJECTED) {
    return this.then(null, onREJECTED);
  }
  finally(onFinally) {
    return this.then(
      (data) => {
        onFinally();
        return data;
      },
      (reason) => {
        onFinally();
        return reason;
      }
    );
  }
}

// 互相操作
const pro = new Promise((resolve, reject) => {
  resolve(2);
});

pro
  .then((res) => {
    console.log(res);
    return new MyPromise((resolve, reject) => {
      resolve(1);
    });
  })
  .then((res) => {
    console.log(res);
  });

function delay(time) {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

(async () => {
  console.log("start");
  const res = await delay(2000);
  console.log(res);
  console.log("end");
})();
```
