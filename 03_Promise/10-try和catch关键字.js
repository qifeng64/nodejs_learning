// es6导入模块，then-fs模块
// import { readFile } from 'then-fs'; // 不支持按需到处;
import thenFs from "then-fs";

// 定义一个函数，用async修饰，将来方便使用await关键字;
async function fn() {
    // try...catch...可以捕获错误，finally一定执行
    try {
        // 若有文件出错，则后面的文件不再进行处理
        let str1 = await thenFs.readFile("./txt/a.txt", "utf-8");
        console.log(str1);
        let str2 = await thenFs.readFile("./txt/b.txt", "utf-8");
        console.log(str2);
        let str3 = await thenFs.readFile("./txt/c.txt", "utf-8");
        console.log(str3);
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log("文件读取成功"); // finally一定执行
    }
}

// 函数不调用，不执行
fn();
