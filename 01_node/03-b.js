// 辅助文件，被别人导入使用(自定义模块)
let a = 123;
let fn = function () {
  console.log("我是函数fn");
};

// 尽管是全局变量 但仍需要导出才能在另一个文件中引用

// 导出1 属性名 = 属性值
module.exports.a = a;
module.exports.fn = fn;

// 导出2
module.exports = { a, fn };

// 导出3 导出一个 过于单一
// module.exports = fn;
