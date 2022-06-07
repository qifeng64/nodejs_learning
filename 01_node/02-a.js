// 主文件，导入其他文件;

// 导入 需要接收  前缀不能省略，后缀可以省略;

let obj = require("./03-b");
// console.log(a);// 不能直接使用导入文件中的全局变量
// console.log(fn)// 不能直接使用导入文件中的全局变量

// 对应导出方法1和方法2
console.log(obj.a);
obj.fn();

// 对应导出方法3
// obj()
