let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise is resolved after 5s")
        resolve(56)
    }, 5000)
})

p1.then((value) => {
    console.log(value);
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2")
        }, 2000)
    })

    return p2
}).then((value) => {
    console.log("We are DONE!!");
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise p3")
        }, 10000)
    })
    return p3
}).then(() => {
    console.log("Finally Done!!");
    return 2;
}).then((value) => {
    console.log("Now surely DONE!!")
})