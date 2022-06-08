// require()执行机制:
// 1.判断缓存中有没有正在加载的模块，如果有，使用缓存中的内容，如果没有，那么表示第一次加载，加载完会缓存
// 2.判断模块名有没有带路径（./）
// 3.模块名中有路径，加载自定义模块（自己写的文件）const xx = require('./xx')
//    *优先加载同名文件，加载一个叫做 xx 的文件
//    *若无则加载js文件，加载 xx.js 文件
//    *若无则加载json文件，加载 xx.json 文件
//    *如果上述文件都没有，则报错 “Cannot find module './xx'”
// 4.模块名没有路径，优先加载核心模块，如果没有核心模块，则加载第三方模块
// 5.加载第三方模块的查找方式
//    *优先在当前文件夹的node_modules里面查找第三方模块
//    *在当前文件夹的上级目录的node_modules里面查找第三方模块
//    *继续向上层文件夹查找第三方模块

// 多次导入某个文件
const obj1 = require("./04-演示require加载机制");
console.log(obj1.str);
const obj2 = require("./04-演示require加载机制");
console.log(obj2.str);
const obj3 = require("./04-演示require加载机制");
console.log(obj3.str);
