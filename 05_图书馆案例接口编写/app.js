import express from "express";
// 导入 自定义功能模块 可用解构按需导入 需要下载 then-fs 模块，否则报错
import common from "./common.js";
const app = express();

// 1.编写 获取图书列表接口
app.get("/api/getbooks", async (req, res) => {
  // 调用自定义模块中的获取数据方法
  let arr = await common.getData(); // getData方法返回的是promise对象，用asyc...await...
  console.log(arr);
  // 判断，如果返回的是 获取失败，那么就给客户端响应服务端出问题了
  if ("获取失败" == arr) {
    // 将变量写在后面的好处等号漏写会报错
    res.send({
      status: 501,
      msg: "服务器代码出现错误",
    });
  } else {
    res.send({
      status: 200,
      msg: "获取图书列表成功",
      data: arr,
    });
  }
  // 响应数据 一次请求中只允许一次send方法
  //   res.send("获取图书列表成功");
});

// 2.编写 添加图书接口
app.use(express.urlencoded({ extended: false })); // 接收 a=1&b=2&c=3类型的数据
app.use(express.json()); // 接收json类型的数据
app.post("/api/addbook", async (req, res) => {
  // 接收请求体参数 校验图书名称，作者，出版社是否为 空 或是 undefined！
  if (!req.body.bookname)
    return res.send({ status: 502, msg: "图书名称不能为空" });
  if (!req.body.author)
    return res.send({ status: 502, msg: "图书作者不能为空" });
  if (!req.body.publisher)
    return res.send({ status: 502, msg: "图书出版社不能为空" });
  //   console.log(req.body); 调用添加功能
  const str = await common.addData(req.body);
  // 判断返回的信息
  if ("添加成功" == str) {
    res.send({
      status: 201,
      msg: "添加图书成功",
    });
  } else {
    res.send({
      status: 501,
      msg: "添加图书失败",
    });
  }
  //   console.log(str); 查看成功输出内容
  //   res.send("添加图书成功");  不能发送两次
});

// 3.编写 删除图书接口
app.get("/api/delbook", (req, res) => {
  // 获取查询参数
  console.log(req.query);
  res.send("删除图书成功");
});
app.listen(3006, () => {
  console.log("服务已启动，请访问 http://localhost:3006");
});
