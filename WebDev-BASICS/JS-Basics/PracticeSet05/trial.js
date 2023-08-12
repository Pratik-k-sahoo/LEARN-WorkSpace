const compare = (a, b) =>{
    return b-a
}

let arr = [10, 53, 80, 1, 6, 4]
console.log(arr)
arr.sort(compare)
console.log(arr)


const a= [1, 2, 3]
a.forEach((value,index, array) =>{
    console.log(value,index, array)
})

let sum = a.reduce(add = (b) =>{
    return b+b
} )
console.log("SUM IS",sum)

for(let i of a){
    console.log(i)
}
