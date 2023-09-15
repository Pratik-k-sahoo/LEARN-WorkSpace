let p1 = new Promise((resolve, reject) => {
    // alert("Hey I am not Resolved")
    setTimeout(() => {
        resolve(1)
    }, 2000)
})

p1.then(() => {
    console.log("Congrats this promise is now Resolved");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 6000)
    })
}).then((value, error) => {
    console.log(value)
    console.log(error)
})

p1.then(() => {
    // alert("Hurrayy!")
    console.log("Hurrayy!");
})