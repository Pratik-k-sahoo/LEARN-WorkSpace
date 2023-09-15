let p = () => {
    return new Promise((resolve, reject) => {
        // setTimeout(() =>{
        //     resolve("This is Resolved")
        // }, 3000)
        setTimeout(() => {
            reject(new Error("This is not possible"))
        }, 3000);
    })
}

let a3 = async() =>{
    try{
        let c = await p()
        console.log("Practice Set 09 Q-03");
        console.log("--------------------");
        console.log(c + " Successfully ran");
    }catch(error){
        console.log("Practice Set 09 Q-03");    
        console.log("--------------------");
        console.log(error + " The error has been Handled");
    }
}

a3()