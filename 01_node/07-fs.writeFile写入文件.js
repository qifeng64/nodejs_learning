// 导入模块
const fs = require("fs");

// 写入文件内容 - writeFile异步方法
fs.writeFile("./txt/1.txt", "我是新的内容", (err) => {
  // 写入成功 ：err是null，  写入失败 ：err就是错误对象
  // if(err){} // 对象类型对应的布尔值是 true
  // 代码只有一行   if语句可简写   if (err != null) return console.log(err.message);
  if (err != null) {
    return console.log(err.message);
  }
  // 成功提示
  console.log("写入成功");
});

// 注意1: 文件存在，会覆盖原有内容;  appendFile 是追加文件内容
// 注意2: 文件不存在，会创建新文件;
// 注意3: 文件夹不存在，会报错;
