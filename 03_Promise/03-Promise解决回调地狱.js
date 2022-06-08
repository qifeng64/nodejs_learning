// es6导入fs模块
import fs from "fs";

// 创建三个Promise对象，分别读取三个文件;

let p1 = new Promise((resolve, reject) => {
    fs.readFile("./txt/a.txt", "utf-8", (err, data) => {
        // 读取文件，不考虑错误处理
        resolve(data);
    });
});

let p2 = new Promise((resolve, reject) => {
    fs.readFile("./txt/b.txt", "utf-8", (err, data) => {
        // 读取文件，不考虑错误处理
        resolve(data);
    });
});

let p3 = new Promise((resolve, reject) => {
    fs.readFile("./txt/c.txt", "utf-8", (err, data) => {
        // 读取文件，不考虑错误处理
        resolve(data);
    });
});

// 执行 - 链式编程问题，后面解决;
p1.then((res) => {
    console.log(res);
    return p2; // p1.then() 的返回值是p2
})
    .then((res) => {
        console.log(res);
        return p3; // 用p2调用then() 然后返回p3
    })
    .then((res) => {
        console.log(res); // 用p3调用then()
    });
