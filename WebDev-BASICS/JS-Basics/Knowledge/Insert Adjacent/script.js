let ele = document.getElementById("first")
ele.insertAdjacentHTML("beforebegin", '<div class="beforebegin">Beforebegin</div>')
ele.insertAdjacentHTML("beforeend", '<div class="beforeend">Beforeend</div>')
ele.insertAdjacentHTML("afterbegin", '<div class="afterbegin">Afterbegin</div>')
ele.insertAdjacentHTML("afterend", '<div class="afterend">Afterend</div>')
ele.insertAdjacentText("afterend", '<div class="afterend">Afterend Text</div>')

first.remove()