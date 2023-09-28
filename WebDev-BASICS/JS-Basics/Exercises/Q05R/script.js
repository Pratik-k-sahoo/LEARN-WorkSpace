const genCode = () => {
    let code = "";
    while(code.length < 1000){
        code = code.concat(Math.floor(Math.random() * 2))
    }

    return code;
}

let check = Array.from(document.getElementsByClassName("check"))

function checkall() {
    if(check[2].checked){
        check[0].checked = true
        check[1].checked = true
    }
}

function hack(){
    let side = Array.from(document.getElementsByClassName("side1"))
    let clear1 = setInterval(() => {
        side[0].innerHTML = genCode()
    }, 300)

    let clear2 = setInterval(() => {
        side[1].innerHTML = genCode()
    }, 400)

    let text = Array.from(document.getElementsByClassName("text"))
    let target = document.getElementById("target").value

    const hackStart = async function () {
        {
            for(let i=1; i<text.length; i++){
                text[i].innerHTML = " "
            }
        }
        
        let step1 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[1].innerHTML = "Hacking User...."
                resolve(1)
            }, 1000)
        })

        let step2 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[2].innerHTML = "User Located"
                resolve(1)
            }, 1000)
        })

        let step2a = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[2].innerHTML = `Username : ${target} &nbsp;&nbsp;`
                resolve(1)
            }, 2000)
        })

        let step3 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[3].innerHTML = "Finding Password....(Putting 1000 Passwords)"
                resolve(1)
            }, 3000)
        })

        let step4 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[3].innerHTML = ""
                text[4].innerHTML = "Failed.... Retrying"
                resolve(1)
            }, 2000)
        })

        let step3b = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[4].innerHTML = ""
                text[3].innerHTML = "Finding Password....(Putting next 1000 Passwords)"
                resolve(1)
            }, 3000)
        })

        let step2b = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[3].innerHTML = ""
                text[2].innerHTML += `Password : xxxxxxx &nbsp;&nbsp;`
                resolve(1)
            }, 500)
        })

        let step2c = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[2].innerHTML += `Phone Number: +91xxxxxxxxxx &nbsp;&nbsp;`
                resolve(1)
            }, 800)
        })

        let step3c = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[3].innerHTML = "Getting device info...."
                resolve(1)
            }, 1000)
        })

        if(check[0].checked){
            let step5 = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    text[5].innerHTML = "Facebook Hacked"
                    resolve(1)
                }, 1000)
            })
        }

        if(check[1].checked){
            let step5 = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    text[5].innerHTML = "Instagram Hacked"
                    resolve(1)
                }, 1000)
            })
        }

        let step5a = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[5].innerHTML = "Resetting Password...."
                resolve(1)
            }, 1000)
        })

        let step6 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[2].innerHTML = "Access granted to Phone"
                resolve(1)
            }, 1000)
        })

        let step7 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[2].innerHTML = "Logs Generated"
                resolve(1)
            }, 1000)
        })

        let step8 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[6].innerHTML = "Hacking Status: Pending...."
                resolve(1)
            }, 4000)
        })

        let step9 = await new Promise((resolve, reject) => {
            setTimeout(() => {
                text[6].innerHTML = "hacking status: hacked! succesfully -_+"
                resolve(1)
                clearInterval(clear1)
                clearInterval(clear2)
                side.forEach((x) => {
                    x.innerHTML = "Hacker Man"
                })
            }, 3000)
        })

    }
    hackStart()
}