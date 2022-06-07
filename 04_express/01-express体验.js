// 1.创建文件夹:  02-express  不能包含汉字和特殊符号;
// 2.初始化:  npm  init  -y
// 3.下载express:  npm   i   express@4.17.1
// 4.1. 导入 - commonJS , 和es6模块化互斥;
// const express = require('express');
// 4.2  导入 es6模块化 - 和commonJS模块化互斥;
//      设置 "type": "module",

import express from "express";

// 5. 创建express实例
const app = express();
// 6. 编写接口
app.get("/api/getbooks", (req, res) => {
  // 拓展: res是响应对象，所有的响应信息都在这个对象上;
  // 响应行，响应头，响应体都可以自由设置 => 设置应在发送到客户端之前;
  res.status(404); // cms身份认证失败，token传递失败的情况;
  // res.set({ "content-type": "text/html" }); // 解决乱码方式之一;
  // res.end("hello world, 世界你好"); // 中文乱码
  res.send({
    code: 0,
    message: "获取图书信息成功",
    data: "获取图书列表成功",
  });
});

app.post("/api/addbook", (req, res) => {
  res.send("图书添加成功");
});
// 7. 启动服务(监听端口号)
// Error: listen EADDRINUSE: address already in use :::8888
app.listen(8888, function () {
  console.log("服务已启动，请访问 http://localhost:8888");
});
