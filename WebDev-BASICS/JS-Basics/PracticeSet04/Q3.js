const prompt=require("prompt-sync")({sigint:true});

let name = prompt("Enter your name");
console.log(name.toLowerCase())