// 导入模块
const path = require("path");

// 定义一个路径
let url = "http://www.liulongbin.top:3009/index.html";
// 获取后缀名
let str1 = path.extname(url);
console.log(str1);
// 获取文件基础名称  不指定后缀名 输出index.html
// let str2 = path.basename(url, ".html");
let str2 = path.basename(url, str1);
console.log(str2);
