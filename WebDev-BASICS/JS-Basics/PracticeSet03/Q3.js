const prompt=require("prompt-sync")({sigint:true});

let num=5;

let n =Number.parseInt(prompt("Enter the number"));

while(n!=num){
    n =Number.parseInt(prompt("Try Again:"));
}

console.log("Entered Correct Number.");