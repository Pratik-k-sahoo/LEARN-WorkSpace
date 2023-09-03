let user = prompt("Enter S W or G")
let cpuI = Math.floor(Math.random() * 3)
let cpu = ["S", "W", "G"][cpuI]

const match = (cpu, user) => {
    if(cpu === user){
        return "Draw"
    }
    else if(cpu === "S" && user === "W"){
        return "CPU"
    }
    else if(cpu === "G" && user ==="W"){
        return "USER"
    }
    else if(cpu === "W" && user === "S"){
        return "USER"
    }
    else if(cpu === "G" && user === "S"){
        return "CPU"
    }
    else if(cpu === "W" && user === "G"){
        return "CPU"
    }
    else if(cpu === "S" && user === "G"){
        return "USER"
    }
} 

console.log(match(cpu, user))