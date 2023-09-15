try{
    let a = 0;
    console.log(program) //Error
    console.log("Program ran successfully");
}catch(error){
    console.log(error)
    // console.log(p) // Error
}
finally{
    console.log("I am a good BOY");
    //Close the file
    //Exit the loop
    //Write to the log File
}
const func = () => {
    try{
        let a = 0;
        // console.log(program) //Error
        console.log("Program ran successfully");
        return
    }catch(error){
        console.log(error)
        console.log(p) // Error
    }
    finally{
        console.log("I am a good Function");
        //Close the file
        //Exit the loop
        //Write to the log File
    }
}

func()
console.log("End");