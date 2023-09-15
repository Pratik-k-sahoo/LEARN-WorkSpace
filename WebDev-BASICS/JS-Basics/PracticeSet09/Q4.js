let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10)
        }, 2000)
    })
}

let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20)
        }, 1000)
    })
}

let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30)
        }, 3000)
    })
}

const run = async () => {
    console.time('run')
    //Bad Time Use Case(More Time to fetch)
    // let b1 = await p1() //Fetch First 10 products from the database
    // let b2 = await p2() //Fetch another 10 products from the database
    // let b3 = await p3() //Fetch yet another 10 products from the database

    //Good Usage of time pal=rally run all but await for the last data to fetch in Promise.all()
    let b1 = p1()
    let b2 = p2()
    let b3 = p3()
    let b1b2b3 = await Promise.all([b1, b2, b3])
    
    console.log("Practice Set 09 Q-04");    
    console.log("--------------------");

    // console.log(b1, b2, b3)
    console.log(b1b2b3)
    console.timeEnd('run')
}

run()