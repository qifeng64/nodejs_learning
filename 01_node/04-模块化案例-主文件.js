// 主文件负责导入，并测试;
// 不改引入的方法用const接收，改用let
const obj = require("./05-模块化案例-功能文件");
// 测试
let str = obj.setString("aaaBBBccc");
console.log(str);

/* 模块的分类：
  *自定义模块：用户自己创建的每个JS文件，都是自定义模块

  *内置模块（核心模块）：Node安装后，即可使用的模块，Node环境自带。

  *第三方模块：其他人或公司、组织开发的模块，发布到 npm 网站，我们需要下载使用的模块
    */
