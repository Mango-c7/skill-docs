# commonjs 的本质

commonjs 是一种模块化规范，它定义了模块的导入和导出方式。commonjs 的本质是将模块的代码包装在一个函数中，然后通过模块的 id 来引用模块。

commonjs 的模块化规范包括以下内容：

- 模块的导入：使用 `require` 函数来导入模块。
- 模块的导出：使用 `module.exports` 或 `exports` 对象来导出模块。
- 模块的缓存：模块在被第一次加载后会被缓存，后续的加载会直接使用缓存中的模块。
- 模块的同步加载：commonjs 模块是同步加载的，这意味着模块的加载会阻塞后续代码的执行。
- 模块的作用域：commonjs 模块的作用域是局部的，模块内部的变量和函数只能在模块内部使用。
- 模块的循环依赖：commonjs 模块支持循环依赖，即模块 A 依赖模块 B，模块 B 依赖模块 A，commonjs 会按照依赖关系加载模块，不会出现循环依赖的问题。

```js
const moduleCache = new Map();

function require(modulePath) {
  // 1. 根据传递的模块路径，找到对应的模块文件这里是绝对路径来作为模块Id
  const moduleId = getModuleId(modulePath);

  // 2. 判断模块是否已经被加载过，如果加载过则直接返回模块的导出内容
  if (moduleCache.has(moduleId)) {
    return moduleCache.get(moduleId).exports;
  }

  // 3. 准备辅助函数，用于导出模块的内容
  let module = {
    id: moduleId,
    exports: {},
    loaded: false,
    filename: moduleId,
    path: path.dirname(moduleId),
  };

  //将模块缓存起来
  moduleCache.set(moduleId, module);

  let exports = module.exports;
  let __filename = moduleId; // 得到模块的绝对路径
  let __dirname = path.dirname(__filename); // 得到模块的目录路径

  // 4. 执行模块的代码，将模块的导出内容存储到 module.exports 中
  try {
    // 读取文件内容
    const fileContent = fs.readFileSync(moduleId, "utf-8");
    // 包装成函数
    const wrapperFunction = `
    (function(exports, require, module, __filename, __dirname) {${fileContent}})
    `;
    // 执行模块代码
    const compiledWrapper = eval(wrapperFunction);
    compiledWrapper.call(
      exports, // this 上下文
      exports, // exports 参数
      require, // require 参数
      module, // module 参数
      __filename, // __filename 参数
      __dirname // __dirname 参数
    );
    // 标记模块已加载完成
    module.loaded = true;
  } catch (error) {
    // 如果执行出错，从缓存中移除
    moduleCache.delete(moduleId);
    throw error;
  }

  // 6. 返回模块的导出内容
  return module.exports;
}

function getModuleId(modulePath) {
  const path = require("path");
  const absolutePath = path.resolve(modulePath);
  return absolutePath;
}
```
