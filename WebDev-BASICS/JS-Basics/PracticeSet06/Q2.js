//To be done in browser console

let flag = true
while(flag){
    let age = prompt("Enter your age: ")
    if(age<18){
        alert("You can't drive")
    }else if(age>=18){
        alert("You can drive")
    }
    flag = confirm("Do you want to see the prompt again?")
}