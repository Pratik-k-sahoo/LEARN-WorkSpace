const prompt=require("prompt-sync")({sigint:true});

let a = prompt("Enter: ");
a=Number.parseInt(a);

if(a%2==0 && a%3==0){
    console.log(a + " is divisible by both 2 and 3");
}else{
    console.log(a + " Not divisible by both 2 and 3");
}