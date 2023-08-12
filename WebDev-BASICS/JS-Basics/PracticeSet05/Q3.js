const divisible_By_10 = (a) =>{
    return a%10==0
}

let arr = [10, 25, 26, 50, 80, 99, 1010]

let newArr = arr.filter(divisible_By_10)
console.log(newArr)
// console.log(arr)