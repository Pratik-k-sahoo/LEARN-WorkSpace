let x = function(e) {
    console.log(e)
    console.log(e.target)
    console.log(e.type)
    console.log(e.currentTarget)
    console.log(e.clientX, e.clientY)
    alert("Hello World1 !")
}

let y = function(e) {
    alert("Hello World2 !")
}

let ele = document.getElementById("btn")
ele.addEventListener('click', x)
ele.addEventListener('click', y)

let b = prompt("Enter your favorite number: ")
if(b == '2'){
    ele.removeEventListener('click', x)
}