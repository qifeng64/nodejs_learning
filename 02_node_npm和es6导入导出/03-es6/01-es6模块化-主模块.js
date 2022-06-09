// 1.默认导入 - 不能运用解构接收
//   ⭐不能省略前缀和后缀
import obj from "./02-es6模块化-功能模块.js";
console.log(obj);

// 2.按需导入 - 接收必须解构
//   ⭐解构可以用‘；’进行重命名，但这里解构导入，需要使用as重命名
import { num, str, fn as f1 } from "./02-es6模块化-功能模块.js";
console.log(num);
console.log(str);
f1();

// 3.直接导入模块(无导出)
import "./02-es6模块化-功能模块.js";
// 导入3次 但是 1 2 3 只输出一次
// 注意: es6模块化也是优先从缓存中加载！

/*
 * 确保安装了 v13.0.0 或更高版本的 node.js
 * 在 package.json 的根节点中添加 "type": "module" 节点
 * 配置之后，则只能使用ES6模块化语法，不能再使用CommonJS语法了
 * node.js => CommonJS   导入 require()  导出 module.exports
 * ES6     =>            导入 import     导出 export
 */
