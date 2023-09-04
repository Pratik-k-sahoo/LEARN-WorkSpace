let ele1 = document.getElementById("first")
let a1 = ele1.getAttribute("class")
console.log(a1)

let ele = document.getElementsByClassName("hey")
let a = ele[0].getAttribute("id")
console.log(a)

console.log(ele1.hasAttribute("class"))
console.log(ele1.hasAttribute("style"))
console.log(ele1.hasAttribute("id"))

// let b = ele1.setAttribute("hidden", "true")
// console.log(b + "hidden")
// b = ele1.setAttribute("hidden", "false")
// console.log(b + "unhidden")

console.log(ele1.attributes)

console.log(ele1.getAttribute("data-name"))
console.log(ele1.getAttribute("data-game"))
console.log(ele1.dataset)
console.log(ele1.dataset.name)
console.log(ele1.dataset.game)