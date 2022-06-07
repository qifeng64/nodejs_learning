// 1. 创建一个文件夹:   02-npm
// 2. 初始化:  npm  init  -y
// 3. 下  载:  npm  i   moment
// 4. 导  入
const moment = require("moment");

// 5. 使用1 不传参 获取当前时间
let a = moment().format();
console.log(a);

// 6. 使用2 传参获取指定的日期 并 指定格式
let b = new Date("1999-7-1");

let c = moment(b).format("YYYY-MM-DD HH:mm:ss");
console.log(c);
