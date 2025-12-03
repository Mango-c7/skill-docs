# JsonSchema 校验

JsonSchema 是一种用于验证 JSON 数据格式的工具，它定义了一组规则，用于验证 JSON 数据是否符合特定的结构。JsonSchema 可以用于验证 JSON 数据的格式、类型、长度、范围等。

```js
// jsonschema.js
// 1.校验必填项
// 2.检查类型和属性
// 3.检查长度和范围
// 4.自定义校验规则

const createValidator = (schema) => {
  return (data) => {
    const Error = [];

    // 校验必填项
    const required = schema.required || [];
    if (required.length > 0) {
      for (const key of required) {
        if (data[key] === null || data[key] === undefined) {
          Error.push(`${key} 是必填项`);
        }
      }
    }

    // 检查类型和属性
    if (typeof data !== schema.type) {
      Error.push(`要校验的数据必须是 ${schema.type}`);
    }

    for (const [field, rule] of Object.entries(schema.properties)) {
      const value = data[field];
      if (value === undefined) continue; // 忽略未定义的属性

      // 检查类型
      if (typeof value !== rule.type) {
        Error.push(`${field} 类型不是 ${rule.type}`);
      }

      // 检查长度和范围
      if (rule.type === "string") {
        // 检查长度
        if (rule.minLength && value.length < rule.minLength) {
          Error.push(`${field} 长度小于 ${rule.minLength}`);
        }
        // 检查最大长度
        if (rule.maxLength && value.length > rule.maxLength) {
          Error.push(`${field} 长度大于 ${rule.maxLength}`);
        }
        // 检查正则
        if (rule.pattern && !new RegExp(rule.pattern).test(value)) {
          Error.push(`${field} 不符合正则匹配模式 ${rule.pattern}`);
        }

        // email 格式检查
        if (rule.format === "email") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            Error.push(`${field} 邮箱格式不正确`);
          }
        }
        // 检查自定义规则
        if (rule.validator && !rule.validator(value)) {
          Error.push(`${field} 与自定义规则不匹配`);
        }
      }

      // 检查数字范围
      if (rule.type === "number") {
        // 检查最小值
        if (rule.minimum && value < rule.minimum) {
          Error.push(`${field} 小于 ${rule.minimum}`);
        }
        // 检查最大值
        if (rule.maximum && value > rule.maximum) {
          Error.push(`${field} 大于 ${rule.maximum}`);
        }
      }
    }

    return Error.length === 0 ? null : Error;
  };
};

const schema = {
  type: "object", // 必须是对象
  properties: {
    // 定义属性
    name: {
      type: "string",
      minLength: 2,
      maxLength: 10,
    },
    age: {
      type: "number",
      minimum: 18,
      maximum: 100,
    },
    email: {
      type: "string",
      format: "email",
    },
    customValidator: {
      type: "string",
      validator: (value) => value === "customValue", // 自定义校验规则
    },
  },
  required: ["name", "age"], // 必填项
  additionalProperties: false, // 不允许添加其他属性
};

const validatorUser = createValidator(schema);

const testData = [
  { name: "John", age: 20, email: "john@example.com" },
  { name: "Jane", age: 17, email: "jane@example.com" },
  { name: "Bob", email: "123.com" },
  {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    customValidator: "customValue1",
  },
];

testData.forEach((item, index) => {
  const result = validatorUser(item);
  console.log(`用户` + index + `校验结果：`, result || "校验通过");
});
```
