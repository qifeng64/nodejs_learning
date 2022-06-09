// 3. 宏任务
setTimeout(() => {
    console.log("1");
}, 0);

// 1. 同步任务
console.log("2");

new Promise((resolve) => {
    // 1. 同步任务
    console.log("3");
    resolve();
})
    .then(() => {
        // 2. 微任务
        console.log("4");
    })
    .then(() => {
        // 2. 微任务
        console.log("5");
    });

// 1. 同步任务
console.log("6");

// 2 3 6 4 5 1
// 结论：同步任务优于微任务，微任务优于宏任务
