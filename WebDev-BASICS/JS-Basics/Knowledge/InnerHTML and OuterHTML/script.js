let first = document.getElementById('first')
console.log(first.innerHTML)
first.innerHTML = "<i>Hi I am Italic </i>"
console.log(first.innerHTML)

console.log(first.outerHTML)
first.outerHTML = `<div id="newDiv">Hi I am new HTML changed by the OUTER HTML property and span is removed</div>`
console.log(newDiv.outerHTML)
console.log(newDiv.innerHTML)

// for text and comment use .data or .nodeValue
console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue)


//text content int html without the tags
console.log(document.body.textContent)

//hidden items
let second = document.getElementById('second')
let third = document.getElementById('third')

console.log(second.hidden)
console.log(third.hidden)
third.hidden = true;
console.log(third.hidden)
third.hidden = false;
second.hidden = false;