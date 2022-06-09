// 利用 async 和 await 及 then-fs 封装增删查改
//   封装好的方法要返回数据;
import thenFs from 'then-fs';
// es6模块化下，无法使用__dirname，所以使用相对路径了;
let url = './data.json';
// 按需导出
// 1.查询
export async function getData() {
    try {
        // 利用thenFs模块读取文件信息，转换为数组，返回;
        let str = await thenFs.readFile(url, 'utf8');
        // 转换为数组，并返回
        let arr = JSON.parse(str);
        return arr;
    } catch(e) {
        return '获取失败';
    }
}
// // 测试
// getData().then(res => {
//     console.log(res);
// });

// 2.添加
export async function addData(obj) {
    // 读取数据转换为数组
    let arr = await getData();
    // 向数组中添加元素, obj中添加id
    obj.id = arr[arr.length-1].id*1 + 1;
    arr.push(obj);
    // 写入代码，需要try捕获错误
    try {
        await thenFs.writeFile(url, JSON.stringify(arr));
        return '添加成功';
    } catch(e) {
        return '添加失败';
    }
}
// // 测试
// addData({ 
//     bookname: '三体2', 
//     author: '刘慈欣', 
//     publisher: '武汉人民出版社' 
// }).then(res => console.log(res));

// 3.删除
export async function delData(id) {
    // 读取数据转换为数组
    let arr = await getData();
    // 过滤
    let newArr = arr.filter(item => item.id != id);
    // 写入代码，需要try捕获错误
    try {
        await thenFs.writeFile(url, JSON.stringify(newArr));
        return '删除成功';
    } catch (e) {
        return '删除失败';
    }
}
// // 测试
// delData(5).then(res => console.log(res));

// 4.修改
export async function putData(obj) {
    // 读取数据转换为数组
    let arr = await getData();
    // 修改 - 先删除，后添加
    let index = arr.findIndex(item => item.id == obj.id);
    arr.splice(index, 1, obj);
    // 写入代码，需要try捕获错误
    try {
        await thenFs.writeFile(url, JSON.stringify(arr));
        return '修改成功';
    } catch (e) {
        return '修改失败';
    }
}
// // 测试
// putData({ 
//     id: 1,
//     bookname: '三国演义前传', 
//     author: '刘慈欣', 
//     publisher: '武汉人民出版社' 
// }).then(res => console.log(res));

// 默认导出
export default {
    getData, addData, delData, putData
}
