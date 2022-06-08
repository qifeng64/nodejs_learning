// 入口文件 提供功能，向外导出
function fn() {
    console.log("我是函数fn");
}

module.exports.fn = fn;

// npm login;
// npm publish;
// npm unpublish 包名 --force
