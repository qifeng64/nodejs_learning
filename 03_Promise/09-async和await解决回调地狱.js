// es6导入模块，then-fs模块
// import { readFile } from 'then-fs'; // 不支持按需导出;
import thenFs from "then-fs";

// 定义一个函数，用async修饰，将来方便使用await关键字;
async function fn() {
    let str1 = await thenFs.readFile("./txt/a.txt", "utf-8");
    console.log(str1);
    let str2 = await thenFs.readFile("./txt/b.txt", "utf-8"); // 若有一个出错，则全部不能输出
    console.log(str2);
    let str3 = await thenFs.readFile("./txt/c.txt", "utf-8");
    console.log(str3);
}

// 函数不调用，不执行
fn();
