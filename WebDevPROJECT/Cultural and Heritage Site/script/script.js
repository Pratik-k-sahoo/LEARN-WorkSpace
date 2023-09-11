const typed=new Typed('.multiple_text',{
    strings: ["Incredible India", "Dekho Apna Desh!", " Explore the Indian Culture and Heritage."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let nav = document.getElementsByTagName('nav')
window.addEventListener('scroll', function(){
    if(window.scrollY > 603){
        nav[0].classList.add('nav_color_change')
        nav[0].style.height = 120;
    }
    else{
        nav[0].classList.remove('nav_color_change')
    }
})