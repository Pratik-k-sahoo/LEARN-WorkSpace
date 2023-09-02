//Change the card title to red
// let cTitle = document.getElementsByClassName("card-title")
// cTitle[0].style.color = 'red'

let cTitle = document.getElementById("first-card")
cTitle.style.color = 'red'

let cTitles = document.querySelectorAll('.card-title')
cTitles[0].style.color = 'blue'
cTitles[1].style.color = 'red'
cTitles[2].style.color = 'green'
console.log(cTitles)


document.querySelector('.this').style.color = 'red'
document.querySelector('.this').style.background = 'yellow'

console.log(document.getElementsByTagName('a'))
console.log(document.querySelector('.card').getElementsByTagName('a'))

console.log(document.getElementsByName('search'))