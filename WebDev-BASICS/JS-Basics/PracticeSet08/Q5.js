let bulb = document.getElementById("bulb")
let a = function(){
    bulb.classList.toggle('yellow')
}

let btn = document.getElementById("btn")
// btn.onclick = a

setInterval(a, 300)