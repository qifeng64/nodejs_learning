// 思路: 封装四个方法，增删改查;
// 导入内置模块
const fs = require("fs");
const path = require("path");
const url = path.join(__dirname, "./data.json");

// 1.查询
function getData() {
    // 读取文件信息
    fs.readFile(url, "utf8", (err, data) => {
        // 判断读取结果
        if (err) return console.log(err.message);
        // 读取成功，输出结果
        let arr = JSON.parse(data);
        // 获取的数据无法返回到函数外面(未来讲解Promise对象解决返回值问题)
        console.log(arr);
    });
}
// // 测试
// getData();

// 2.添加 - 读取文件信息，转换为数组，然后向数组中添加内容，写入文件;
function addData(obj) {
    // 读取文件信息，转换为数组
    fs.readFile(url, "utf8", (err, data) => {
        // 判断读取结果
        if (err) return console.log(err.message);
        // 读取成功，就把结果转换为数组
        let arr = JSON.parse(data);
        // TODO: 向数组中添加内容，写入文件;
        // 向对象中添加id, 用数组中的最大id值加1
        obj.id = arr[arr.length - 1].id * 1 + 1;
        arr.push(obj);
        // 写入的数据，应该转换为JSON类型的字符串！
        fs.writeFile(url, JSON.stringify(arr), (err) => {
            // 判断是否成功
            if (err) return console.log(err.message);
            // 成功提示
            console.log("添加成功");
        });
    });
}
// // 调用
// addData({ bookname: "三体2", author: "刘慈欣", publisher: "武汉人民出版社" });

// 3.删除 - 读取文件信息，转换为数组，然后从数组中删除数据，写入文件;
function delData(id) {
    // 读取文件信息，转换为数组
    fs.readFile(url, "utf-8", (err, data) => {
        if (err) return console.log(err.message);
        let arr = JSON.parse(data);
        // 从数组中删除数据 写入文件
        // 思路1: 查询id，根据id删除元素;
        // 思路2: 根据条件过滤数组中的元素(用这一种);
        // 根据id过滤，数组中的元素;(传递过来的id值，如果和图书的id值不相同，就添加到新数组中)
        let newArr = arr.filter((item) => item.id != id);
        fs.writeFile(url, JSON.stringify(newArr), (err) => {
            // 这里要转换数据类型
            if (err) return console.log(err.message);
            console.log("删除成功");
        });
    });
}
// // 测试
// delData(5);

// 4.修改 - 读取文件信息，转换为数组，然后修改数据，写入文件;
function putData(obj) {
    // obj: id  bookname  author   publisher
    // 读取文件信息，转换为数组
    fs.readFile(url, "utf-8", (err, data) => {
        if (err) return console.log(err.message);
        let arr = JSON.parse(data);
        // 返回要修改元素的索引值
        let index = arr.findIndex((item) => item.id == obj.id);
        // splice 是对原数组进行操作 返回值是被删除的元素
        // let newArr = arr.splice(index, 1, obj);
        arr.splice(index, 1, obj);
        fs.writeFile(url, JSON.stringify(arr), (err) => {
            if (err) return console.log(err.message);
            console.log("修改成功");
        });
    });
}
// 测试
// putData({id: 1,bookname: "三国演义后传",author: "吕小布",publisher: "铁岭外包出版社",});

// 导出方法
module.exports = {
    getData,
    addData,
    delData,
    putData,
};
