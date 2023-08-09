import * as alias from 'module';
const prompt=require("prompt-sync")({sigint:true});

let a=prompt("Enter your age: ");
a=Number.parseInt(a);
if(a>0){
    console.log("Valid age");
}
else if(a>18){
    console.log("Adult");
}
else{
    console.log("Senior Citizen")
}

alert("Program done");

