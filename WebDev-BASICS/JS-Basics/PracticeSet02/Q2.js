const prompt=require("prompt-sync")({sigint:true});

let a = prompt("Enter : ");
switch(a){
    case '1': console.log("One");
            break;

    case '2': console.log("Two");
            break;
            
    default: console.log("String");
}