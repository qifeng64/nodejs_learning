// 1.Promise 用于解决异步函数嵌套问题，本身是一个构造函数，所以需要new创建;
// 2.Promise 构造函数的形参是一个函数，这个函数中一定要放入异步函数;
// 3.Promise 形参的函数，有两个形参，一个处理成功的结果，一个处理失败的结果;
// 成功就交由resolve()处理
// 失败就交由reject()处理

import fs from "fs";

let p1 = new Promise((resolve, reject) => {
    fs.readFile("./txt/a.txt", "utf-8", (err, data) => {
        // if (err) {
        //     reject(err);
        // } else {
        //     resolve(data);
        // }
        if (err == null) {
            resolve(data);
        } else {
            reject(err);
        }
    });
});
// Promise的then()和catch()可以处理成功和失败的结果;
p1.then((result) => console.log(result)).catch((err) =>
    console.log(err.message)
);
// // 拓展
p1.then(
    (res) => console.log(res),
    (err) => console.log(err.message)
);
