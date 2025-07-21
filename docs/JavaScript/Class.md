# ES6 中的 Class

在没有出现 class 关键字时，我在 JavaScript 中创建类的方式如下代码块：

你会发现，这个方式创建类非常繁琐，而且还需要手动添加原型方法。
这还不算上，如果需要继承，还需要写更多的代码。

这还不是重点，重点在于：

1. 这种方式创建的类，无法实现私有属性和私有方法。
2. 解决函数的`二义性`，需要使用 `new` 关键字来创建实例。

## 以前的类

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function () {
  console.log(this.name);
};

const person = new Person("Alice", 25);
person.sayName(); // 输出：Alice

// 继承 Person 类
function inherit(Child, Parent) {
  // 1. 创建一个空函数（中介）
  var F = function () {};
  // 2. 将空函数的原型指向父类的原型
  F.prototype = Parent.prototype;
  // 3. 将子类的原型指向空函数的实例
  Child.prototype = new F();
  // 4. 修正子类原型的constructor属性
  Child.prototype.constructor = Child;
  // 5. 可选：存储父类原型引用（超类属性）
  Child.uber = Parent.prototype;
}

function Student(name, age, grade) {
  Person.call(this, name, age);
  this.grade = grade;
}

inherit(Student, Person);

Student.prototype.sayGrade = function () {
  console.log(this.grade);
};

const student = new Student("Bob", 18, 3);
student.sayName(); // 输出：Bob
student.sayGrade(); // 输出：3
```

## ES6 中的类

```js
// 父类
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(this.name);
  }
}

// 子类继承
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // 调用父类构造函数
    this.grade = grade;
  }

  sayGrade() {
    console.log(this.grade);
  }
}

// 使用示例
const person = new Person("Alice", 25);
person.sayName(); // 输出：Alice

const student = new Student("Bob", 18, 3);
student.sayName(); // 输出：Bob
student.sayGrade(); // 输出：3
```
