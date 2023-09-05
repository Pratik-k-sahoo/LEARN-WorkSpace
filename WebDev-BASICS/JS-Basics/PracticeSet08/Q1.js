let element = document.getElementsByClassName("btn")
let a = function(){
    alert("Hello")
}
let b = function(){
    alert("Pratik")
}
let c = function(){
    alert("Sipun")
}
let d = function(){
    alert("I am good")
}
let e = function(){
    alert("How are you?")
}

element[0].addEventListener('click', a)
element[1].addEventListener('click', b)
element[2].addEventListener('click', c)
element[3].addEventListener('click', d)
element[4].addEventListener('click', e)