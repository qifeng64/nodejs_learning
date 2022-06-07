// 内置模块，需要导入（建议先写代码后注释）
const fs = require("fs");

// 读取文件信息                       错误对象在最前面: 错误优先;  node.js所有api都遵循错误优先;
fs.readFile("./txt/1.txt", "utf-8", (err, data) => {
  if (err != null) {
    // 所有的错误对象都有两个属性 name 和 message
    return console.log(err.message); // 读取到内容，err为null，读取不到err为错误对象(文件路径错误);
  } // return 终止 省略 else
  console.log(data); // 读取到内容，data为字符串，读取不到内容data为undefined;
});

// readFile方法为异步方法     readFileSync 同步   异步方法最后执行（好处：不会影响后续代码的执行）
console.log("页面中最后一行代码");
