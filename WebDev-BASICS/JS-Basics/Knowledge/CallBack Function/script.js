function loadScript(src, callback){
    let script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Loaded script with SRC: " + src);
        callback(null, src);
    }

    script.onerror = function(){
        console.log("Error loaded script with SRC: " + src);
        callback(new Error("Src got some error"))
    }

    document.body.appendChild(script)
}

function hello(error, src){
    if(error){
        console.log(typeof error)
        console.log(error)
        return
    }
    alert('Hello '+ src)
}

function goodMorning(error, src){
    if(error){
        console.log(error)
        return
    }
    alert('Good Morning '+ src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js", hello);