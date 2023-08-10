const prompt=require("prompt-sync")({sigint:true});

const meanNumber = (a, b, c, d, e) => {
    let meanNum = (a+b+c+d+e)/5;
    return meanNum;
}

let a=prompt("Enter first Number: ");
a=Number.parseInt(a);
let b=prompt("Enter second Number: ");
b=Number.parseInt(b);
let c=prompt("Enter third Number: ");
c=Number.parseInt(c);
let d=prompt("Enter fourth Number: ");
d=Number.parseInt(d);
let e=prompt("Enter fifth Number: ");
e=Number.parseInt(e);

console.log(meanNumber(a, b, c, d, e));