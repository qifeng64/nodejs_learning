// 利用 async 和 await 及 then-fs 封装增删查改
//   封装好的方法要返回数据;
import thenFs from "then-fs";

// es6模块化下，无法使用__dirname，所以使用相对路径了;
let url = "./data.json";
// 按需导出  =>  在每个函数或方法前加 export
// 1.查询
export async function getData() {
    try {
        // 利用then-fs模块读取文件信息
        let str = await thenFs.readFile(url, "utf-8");
        // 转换为数组
        let arr = JSON.parse(str);
        // 返回
        return arr;
    } catch (e) {
        return e.message;
    }
}
// // 测试
// getData().then((res) => {
//     console.log(res);
// });

// 2.添加
export async function addData(obj) {
    // let str = await thenFs.readFile(url, "utf-8");
    // let arr = JSON.parse(str);
    // 读取数据转换为数组
    let arr = await getData();
    // 向数组中添加元素 obj中添加ID
    obj.id = arr[arr.length - 1].id * 1 + 1;
    arr.push(obj);
    // ⭐写入 需要捕获错误
    try {
        await thenFs.writeFile(url, JSON.stringify(arr));
        return "添加成功";
    } catch (e) {
        return e.message;
    }
}
// // 测试
// addData({ bookname: "三打白骨精", author: "孙悟空", publisher: "123" }).then(
//     (res) => {
//         console.log(res);
//         getData().then((res) => {
//             console.log(res);
//         });
//     }
// );

// 3.删除
export async function delData(id) {
    // 读取数据并转换为数组
    let arr = await getData();
    let newArr = arr.filter((item) => item.id != id);
    // ⭐写入 需要捕获错误
    try {
        await thenFs.writeFile(url, JSON.stringify(newArr));
        return "删除成功";
    } catch (e) {
        return e.message;
    }
}
// // 测试
// delData(5).then((res) => {
//     console.log(res);
//     getData().then((res) => {
//         console.log(res);
//     });
// });

// 4.修改
export async function putData(obj) {
    // 读取数据并转换为数组
    let arr = await getData();
    let index = arr.findIndex((item) => item.id == obj.id);
    arr.splice(index, 1, obj);
    // ⭐写入 需要捕获错误
    try {
        await thenFs.writeFile(url, JSON.stringify(arr));
        return "修改成功";
    } catch (e) {
        return e.message;
    }
}
// // 测试
// putData({
//     id: 4,
//     bookname: "三打白骨精",
//     author: "孙悟空",
//     publisher: "123",
// }).then((res) => {
//     console.log(res);
//     getData().then((res) => {
//         console.log(res);
//     });
// });
// 默认导出  =>  export default {};
export default { getData, addData, delData, putData };
