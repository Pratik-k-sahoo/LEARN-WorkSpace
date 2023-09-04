let a = document.getElementById("first")
a.className = "text-dark red"
console.log(a.classList)
a.classList.remove("red")
a.classList.add("yellow")
a.classList.toggle("yellow")//false
a.classList.toggle("yellow")//true
a.classList.toggle("yellow")//false
a.classList.toggle("yellow")//true....
console.log(a.classList.contains("red"))
console.log(a.classList.contains("yellow"))