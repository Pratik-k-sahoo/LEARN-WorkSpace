let a = document.getElementsByTagName("div")[0]
a.innerHTML = '<h1>Hello World!</h1>' + a.innerHTML

//Another way of insertion
let div = document.createElement("div")
div.className = "alert"
div.innerHTML = "<span>Alert!!!!!</span>"
a.appendChild(div) // It will append as immediate child to it but at the end

//to append in body: But it will append at last even after script tag
// document.body.append(div)

// a.prepand(div)
// a.before(div)
// a.after(div)
// a.replaceWith(div)