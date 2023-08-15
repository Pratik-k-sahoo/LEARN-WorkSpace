let count=1;
let compWin=0;
let userWin=0;
while(count<3 || count<11 && compWin==userWin){
    count++
    let comp = Math.random() * 3
    comp = Number.parseInt(comp)
    if(comp==0){
        comp = "S"
    }else if(comp==1){
        comp = "W"
    }else if(comp==2){
        comp = "G"
    }
    alert("Computer choice:" + comp)
    let user = prompt(`Enter 'S' for snake, 'W' for water and 'G' for gun`)
    let recheck = confirm("Are you sure to give you choice as", user, "?")
    if(recheck){
        if(user == 'S'){
            if(comp == 'S'){
                alert("It's a draw")
                console.log("Your choice:", user, "Computer choice:", comp, "ITS A DRAW")
            }else if(comp == 'W'){
                alert("User wins")
                console.log("Your choice:", user, "Computer choice:", comp, "ITS A WIN")
                userWin++
            }else if(comp == "G"){
                alert("User losses")
                console.log("Your choice:", user, "Computer choice:", comp, "ITS A LOSS")
                compWin++
            }
        }
        else if(user == 'W'){
            if(comp == 'S'){
                alert("User losses")
                console.log("Your choice:", user, "Computer choice:", comp, "ITS A LOSS")
                compWin++
            }else if(comp == 'W'){
                alert("It's a draw")
                console.log("Your choice:", user, "Computer choice:", comp, "ITS A DRAW")
            }else if(comp == "G"){
                alert("User wins")
                console.log("Your choice:", user, "Computer choice:", comp, "ITS A WIN")
                userWin++
            }
        }
        else if(user == 'G'){
            if(comp == 'S'){
                alert("User wins")
                console.log("Your choice:", user, "Computer choice:", comp, "ITS A WIN")
                userWin++
            }else if(comp == 'W'){
                alert("User losses")
                console.log("Your choice:", user, "Computer choice:", comp, "ITS A LOSS")
                compWin++
            }else if(comp == "G"){
                alert("It's a draw")
                console.log("Your choice:", user, "Computer choice:", comp, "ITS A DRAW")
            }
        }
    }
    else{
        user = prompt(`Enter 'S' for snake, 'W' for water and 'G' for gun`)
        recheck = confirm("Are you sure to give you choice as", user, "?")
        if(user == 'S'){
            if(comp == 'S'){
                alert("It's a draw")
                console.log("Your choice:", user, "Computer choice:", comp, "ITS A DRAW")
            }else if(comp == 'W'){
                alert("User wins")
                console.log("Your choice:", user, "Computer choice:", comp, "ITS A WIN")
                userWin++
            }else if(comp == "G"){
                alert("User losses")
                console.log("Your choice:", user, "Computer choice:", comp, "ITS A LOSS")
                compWin++
            }
        }
        else if(user == 'W'){
            if(comp == 'S'){
                alert("User losses")
                console.log("Your choice:", user, "Computer choice:", comp, "ITS A LOSS")
                compWin++
            }else if(comp == 'W'){
                alert("It's a draw")
                console.log("Your choice:", user, "Computer choice:", comp, "ITS A DRAW")
            }else if(comp == "G"){
                alert("User wins")
                console.log("Your choice:", user, "Computer choice:", comp, "ITS A WIN")
                userWin++
            }
        }
        else if(user == 'G'){
            if(comp == 'S'){
                alert("User wins")
                console.log("Your choice:", user, "Computer choice:", comp, "ITS A WIN")
                userWin++
            }else if(comp == 'W'){
                alert("User losses")
                console.log("Your choice:", user, "Computer choice:", comp, "ITS A LOSS")
                compWin++
            }else if(comp == "G"){
                alert("It's a draw")
                console.log("Your choice:", user, "Computer choice:", comp, "ITS A DRAW")
            }
        }
    }
}