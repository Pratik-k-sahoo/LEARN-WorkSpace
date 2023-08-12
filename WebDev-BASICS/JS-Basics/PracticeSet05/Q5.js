const fact = (a, b) =>{
    return a*b
}

let arr = [1, 2, 3, 4, 5]
let newArr = arr.reduce(fact)
console.log(newArr)