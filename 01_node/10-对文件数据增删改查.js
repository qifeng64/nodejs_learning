// 思路: 封装四个方法，增删改查;
// 导入内置模块
const fs = require("fs");
const path = require("path");
const url = path.join(__dirname, "./data.json");

// 1.查询
function getData() {
  // 读取文件信息  异步
  fs.readFile(url, "utf-8", (err, data) => {
    if (err) {
      return console.log(err.message);
    }
    let arr = JSON.parse(data); // 将JSON数据转化为JS
    console.log(arr); // 获取的数据无法返回到函数外面
  });
}
// 测试
// getData();

// 2.添加 - 读取文件信息，转换为数组，然后向数组中添加内容，写入文件;
function addData(obj) {
  fs.readFile(url, "utf-8", (err, data) => {
    if (err) {
      return console.log(err.message);
    }
    let arr = JSON.parse(data); // 将 JSON 转 JS
    // obj.id = arr[-1].id + 1; // 报错
    obj.id = arr[arr.length - 1].id * 1 + 1; // 向对象中添加ID  扩展：若数据中ID不小心设置成字符串类型“5”，直接 +1 => "51"，运用隐式转换（减乘除）
    arr.push(obj); // 数组添加
    fs.writeFile(url, JSON.stringify(arr), (err) => {
      // 将 JS数组 转 JSON字符串
      if (err) return console.log(err.message);
    });
    console.log("添加成功");
  });
}
// 测试
addData({ bookname: "三体1", author: "刘慈欣", publisher: "武汉人民出版社" });
// 3.删除 - 读取文件信息，转换为数组，然后从数组中删除数据，写入文件;
function delData() {}

// 4.修改 - 读取文件信息，转换为数组，然后修改数据，写入文件;
function putData() {}

// 导出方法
module.exports = { getData, addData, delData, putData };
