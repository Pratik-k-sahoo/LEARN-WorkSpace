//CSS MANIPULATION
const changeBgRed = () =>{
    document.body.firstElementChild.style.background = 'Red';
}



//Element Only Navigation
let b = document.body;
console.log("First child of b is:", b.firstChild);
console.log("First Element child of b is:", b.firstElementChild);

alert(document.documentElement.parentNode);
alert(document.documentElement.parentElement);
