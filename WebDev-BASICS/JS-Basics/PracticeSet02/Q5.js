const prompt=require("prompt-sync")({sigint:true});

let a = prompt("Enter age: ");
a=Number.parseInt(a);

(a>=18) ? console.log("You can drive") : console.log("You can't Drive"); 