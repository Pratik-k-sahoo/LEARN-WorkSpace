const prompt=require("prompt-sync")({sigint:true});

let say = prompt("Enter the numbers to add in the array: ")
say = Number.parseInt(say)
let arr = Array.from(say)
console.log(arr)