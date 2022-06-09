// 1.await只能出现在async修饰的函数中！
// 2.await后面跟随的是一个promise对象;
// 3.await能停止代码执行，让后面的同步代码（函数外面的），先执行;
// 4.await返回的是: Promise对象中的then()中的回调函数中的参数res;

// 定义一个async修饰的函数，用于获取一个Promise对象
function getPromise() {
    return "啊哈哈哈";
}
// 1.await只能出现在async修饰的函数中！
async function fn() {
    // 2.await后面跟随的是一个promise对象;
    // 4.await返回的是: Promise对象中的then()中的回调函数中的参数res;
    let str = await getPromise();
    console.log(str);
    console.log(123);
}

// 在这一句代码之前调用;
fn();

// 3.await能停止代码执行，让后面的同步代码（函数外面的），先执行;
console.log(456);

// 注意: async和await没有处理错误情况，reject和catch没有处理，后面详细讲解;

// 未来 async 和 await 操作代码
// form1.addEventListener('submit', async function (e) {
//     e.preventDefault();
//     let res = await axios({
//         method: '', url: '', data: 123
//     })
//     if (res.code == 0) {
//     }
// })
