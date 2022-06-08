// // 下载 then-fs :  npm   i   then-fs
// import fs from 'fs';
// import thenFs from 'then-fs';
// // 测试两个模块中的readFile返回值;
// let a = fs.readFile('./txt/a.txt', 'utf8', (err, data) => {});
// console.log(a); // undefined
// let b = thenFs.readFile('./txt/a.txt', 'utf8'); // thenFs的readFile方法，不要回调函数;
// console.log(b); // Promise对象

// 导入模块
import thenFs from "then-fs";

// 利用 then-fs 模块解决回调地狱
thenFs
    .readFile("./txt/a.txt", "utf-8")
    .then((res) => {
        console.log(res); // 由于 thenFs.readFile 的返回值就是一个 Promise 对象，可以直接 .then() 直接接受结果 ⭐不需要封装Promise对象
        return thenFs.readFile("./txt/b.txt", "utf-8");
    })
    .then((res) => {
        console.log(res);
        return thenFs.readFile("./txt/c.txt", "utf-8");
    })
    .then((res) => {
        console.log(res);
    });
