let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let ampm = document.getElementById("am")


setInterval(() => {
    let d = new Date()
    let getHrs = d.getHours()

    hrs.innerHTML = (d.getHours()>12?"0" + (d.getHours() - 12) : "" + d.getHours)
    ampm.innerHTML = (d.getHours()>12?"&nbsp;PM":"&nbsp;AM")

    // if(getHrs >12){
    //     hrs.innerHTML ="0" + (getHrs - 12);
    //     ampm.innerHTML = "&nbsp;pm"
    // }else{
    //     ampm.innerHTML = "&nbsp;am"
    //     hrs.innerHTML = d.getHours()
    // }

    min.innerHTML = (d.getMinutes()<10?"0":"") + d.getMinutes()

    sec.innerHTML = (d.getSeconds()<10?"0":"") + d.getSeconds()

}, 1000)
