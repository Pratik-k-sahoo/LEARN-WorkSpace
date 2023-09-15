try{
    pratik;
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

//Custom Error
try{
    throw new Error("This is a custom Error")
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

//Reference Type error
try{
    throw new ReferenceError("This is a custom Error")
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

let age = prompt("Enter your age")
age = Number.parseInt(age)
try{
    if(age > 180)
        throw new Error("Invalid Age")
    console.log("Your age is : " + age);
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}