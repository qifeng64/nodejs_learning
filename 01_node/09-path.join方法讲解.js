// 看一个小问题：  node xx.js 路径拼接  =>  相对路径   相对路径，是相对执行文件的时候所在的目录, 不是文件本身所在的目录;

// let url1 = "./txt/1.txt"; // 相对路径  =>  不安全

// let url2 = "E:/front-end/08_nodejs/node 2022-5吕超code/01_node/txt/1.txt"; // 绝对路径  =>  移植性差

// TODO: path.join()解决绝对路径拼接问题！
// console.log(__dirname); // 获取文件夹所在绝对路径（重要）
// console.log(__filename); // 获取文件所在绝对路径
// 导入path模块，利用 __dirname ，拼接绝对路径
const path = require("path");
let url = path.join(__dirname, "./txt/1.txt"); // 拼接绝对路径
// console.log(url);

// 导入fs模块、
const fs = require("fs");
// 读取文件
fs.readFile(url, "utf-8", (err, data) => {
  if (err) return console.log(err.message);
  console.log(data);
});
