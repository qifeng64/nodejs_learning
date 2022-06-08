// 1.默认导入导出 - 不能进行解构
export default { name: "张三", age: 19 };

// 2.按需导入与按需导出 - 接收必须解构
export var num = 123;
export let str = 456;
export const fn = function () {
    console.log("我是函数fn");
};

// 3.直接导入模块(无导出)
for (var i = 1; i <= 3; i++) {
    console.log(i);
}
