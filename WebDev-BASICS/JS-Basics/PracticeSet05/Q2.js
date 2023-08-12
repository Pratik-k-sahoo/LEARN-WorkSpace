const prompt=require("prompt-sync")({sigint:true});

let say = prompt("Enter the number: ")
say=Number.parseInt(say)
let arr = []
while(say!=0){
    arr.push(say)
    say = prompt("Enter the number: ")
    say=Number.parseInt(say)
}
arr.push(say)
console.log(arr)