// 功能文件，负责定义函数，并导出
function setString(str) {
  let str1 = str[0].toUpperCase(); // 首字母大写
  // split 拆分   substr 截取 substr(a,b) 从索引a截取到b, b可省略，表示截取到最后
  let str2 = str.substr(1).toLowerCase(); // 除首字母外全部小写
  return str1 + str2; // 返回新的字符串
}
// 导出1
// module.exports.setString = setString
// 导出2
module.exports = { setString };
