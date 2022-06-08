// es6导入模块
import { readFile } from "fs";

// 封装一个方法，可以获取Promise对象 - axios.js 未来第三方模块，几乎全部支持Promise对象;
function getPromise(url) {
    // 将创建的Promise对象返回
    return new Promise((resolve, reject) => {
        readFile(url, "utf-8", (err, data) => {
            // 文件读取 不考虑错误情况
            resolve(data);
        });
    });
}

// 调用
getPromise("./txt/a.txt")
    .then((res) => {
        console.log(res);
        return getPromise("./txt/b.txt");
    })
    .then((res) => {
        console.log(res);
        return getPromise("./txt/c.txt");
    })
    .then((res) => {
        console.log(res);
    });
