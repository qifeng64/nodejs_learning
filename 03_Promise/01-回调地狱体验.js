// npm  init  -y
// 使用es6模块化导入导出;  (设置type属性，值是module)

// const fs = require("fs");   common.js 与ES6导入导出互斥

// import { readFile, writeFile } from "fs"; // 按需导入
import fs from "fs"; // 默认导入（两种不冲突）

// import path from "path";  ==>  不支持ES6
// url = path.join(__dirname,'./txt/a.txt')

// 读取文件
fs.readFile("./txt/a.txt", "utf-8", (err, data) => {
    if (err) return console.log(err.message);
    console.log(data);

    // 读取文件
    fs.readFile("./txt/b.txt", "utf-8", (err, data) => {
        if (err) return console.log(err.message);
        console.log(data);

        // 读取文件
        fs.readFile("./txt/c.txt", "utf-8", (err, data) => {
            if (err) return console.log(err.message);
            console.log(data);
        });
    });
    // 读取文件
});
