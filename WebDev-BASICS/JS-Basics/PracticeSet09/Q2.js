const loadScript = async (src) => {
    
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = src
        script.onload = () => {
            resolve(src + " Done successfully Q2")
        }
        document.body.append(script)
    })
}

const main = async () => {
    let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
    console.log("Practice Set 09 Q-02");
    console.log("--------------------");
    console.log(a);
}

main()