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



loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js", function goodMorning(error, src){
    if(error){
        console.log(error)
        sendEmergencyMessageToCeo()
        return
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap1.bundle.min.js", function goodMorning(error, src){
        if(error){
            console.log(error)
            sendEmergencyMessageToCeo()
            return
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap2.bundle.min.js", function goodMorning(error, src){
            if(error){
                console.log(error)
                sendEmergencyMessageToCeo()
                return
            }
            //Go-on
        });
    });
});