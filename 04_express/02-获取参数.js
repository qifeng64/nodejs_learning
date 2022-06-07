import express from "express";

const app = express();

app.get("/api/getbooks/:id", (req, res) => {
  res.send("获取图书列表成功");
  console.log(req.query);
  console.log(req.params);
});
// 想要接收a=1&b=2&c=3类型的请求体参数，需要设置:
app.use(express.urlencoded({ extended: true }));

// 想要接收json类型的数据，需要设置:
app.use(express.json());

// 需求接收FormData类型的数据，需要设置:
//  content-type: 'multipart/form-data'
// 下载: npm  i  multer@1.4.2
// 导入 es6
import multer from "multer";
// 配置 - 设置上传文件保存的文件夹！
const upload = multer({ dest: "./uploads/" });
// 告诉multer,哪个属性里面保存的是文件，需要特殊处理;
app.use(upload.single("avatar"));

app.post("/api/addbook", (req, res) => {
  res.send("图书添加成功");
  console.log(req.body);
  // req.file 是专门用于文件上传的时候获取文件信息的，multer专属;
  console.log(req.file);
});

app.listen(8888, function () {
  console.log("服务已启动，请访问 http://localhost:8888");
});
