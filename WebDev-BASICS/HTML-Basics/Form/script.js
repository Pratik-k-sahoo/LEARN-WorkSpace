const form = document.querySelector("form")
const nextBtn = form.querySelector(".nextBtn")
const backBtn = form.querySelector(".backBtn")
const allInput = form.querySelectorAll(".first input")

nextBtn.addEventListener("click", () => {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive')
        }else{
            form.classList.remove('secActive')
            // alert("Input is Empty")
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'))

const image_input = document.querySelector("#image_input")
var upload_image = ""
image_input.addEventListener("change", function(){
    const reader = new FileReader()
    reader.addEventListener("load", () => {
        upload_image = reader.result
        document.querySelector("#display_img").style.backgroundImage = `url(${upload_image})`
        console.log("displayed");
    })
    reader.readAsDataURL(this.files[0])
})