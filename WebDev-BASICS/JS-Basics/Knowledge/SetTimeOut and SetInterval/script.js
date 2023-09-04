// document.write("HELLO")

// let a = setTimeout(function() {
//     alert("I am inside setTimeOut")
// }, 2000)

// let b = prompt("Do you want to clear time out? (y/n)")
// if(b == "y"){
//     clearTimeout(a)
// }
// console.log(a)

const sum = (a, b) => {
    console.log("Yes I'm running " + (a + b))
    return (a + b)
}

console.log(sum(1, 2))
console.log(setTimeout(sum, 1000, 1, 2))

// let c = setInterval(function() {
//     alert("SetInterval")
// }, 2000)
// clearInterval(c)
// console.log(count)