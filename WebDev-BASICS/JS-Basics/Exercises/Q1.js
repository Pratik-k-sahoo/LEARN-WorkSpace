const prompt=require("prompt-sync")({sigint:true});

let originalNum = Math.random() * 100;
originalNum = Number.parseInt(originalNum)
let yourGuess;
let chances=0;
console.log(originalNum)
while(yourGuess!=originalNum && chances<=100){
    yourGuess = prompt("Guess the Number: ")
    yourGuess = Number.parseInt(yourGuess)
    if(yourGuess==originalNum){
        console.log("You Guessed correct Number :", yourGuess)
        console.log("Your score is", (100-chances))
    }
    else if(yourGuess<originalNum && yourGuess>=0){
        console.log("Your Guessed Number is less than Original Number")
        chances++
    }
    else if(yourGuess>originalNum && yourGuess<=100){
        console.log("Your Guessed Number is greater than Original Number")
        chances++
    }
    else{
        console.log("Guess Number between 0-100")
        chances++
    }
}