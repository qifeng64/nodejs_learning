// async 用于修饰一个 function
//      1. async 修饰的函数，总是返回一个 Promise 对象
//      2. 函数的返回值，将自动包装在 resolve 的 promise 中

// 1. async 修饰的函数，总是返回一个 Promise 对象
async function fn() {
    console.log("我不是异步函数"); // 已证3
    return 123; // 2. 函数的返回值，将自动包装在 resolve 的 promise 中
}

// 3. 调用 - 注意: async修饰的函数，不是异步函数！
let result = fn();
console.log(result); // 已证1

// 证明async函数中return返回的数据，是被Promise对象中resolve()抛出的数据
result.then((res) => {
    console.log(res); // 已证2
});
