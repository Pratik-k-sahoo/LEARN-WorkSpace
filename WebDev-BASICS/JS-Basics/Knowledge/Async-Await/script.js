// async function harry(){
//     return 7;
// }

// // harry().then(alert)
// harry().then((x) => {
//     alert(x)
// })

async function myFunc() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 2000)
    })

    let bangaloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 deg")
        }, 5000)
    })

    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)

    console.log("Fetching Delhi weather please wait ....");
    let delhiW = await delhiWeather;
    console.log("Fetched Delhi weather " + delhiW);
    console.log("Fetching Bangalore weather please wait ....");
    let bangaloreW = await bangaloreWeather;
    console.log("Fetched Bangalore weather " + bangaloreW);

    return [delhiW, bangaloreW]
}

const myFunc2 = async () => {
    console.log("Hey I am Function2 and I am waiting")
}

const main = async () => {
    console.log("Welcome to Weather Control Room");
    let a = await myFunc()
    let b = await myFunc2()
}

main()


// console.log(a);