const loadScript2 = async (src) => {
    
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = src
        script.onload = () => {
            resolve(src + " Done successfully Q1")
        }
        document.body.append(script)
    })
}

let a = loadScript2("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
a.then((value) => {
    console.log("Practice Set 09 Q-01");
    console.log("--------------------");
    console.log(value)
})