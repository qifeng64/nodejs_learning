// 同步先执行，异步后执行;

console.log(1);
new Promise((resolve, reject) => {
    console.log(2);
    resolve();
    console.log(3);
}).then((res) => {
    console.log(4);
});
console.log(5);

// Promise的构造函数中，和then及catch中的同步异步问题！
// 1  2  3  5  4
// new Promise的参数中的代码是同步执行;
// then及catch中的代码是异步执行的(后面要用);
