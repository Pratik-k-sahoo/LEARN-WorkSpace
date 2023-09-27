let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contest) => {
    console.log(contest);
    ihtml = ""
    for (item in contest) {
        console.log(contest[item]);
        ihtml += `
        <div class="card" style="width: 18rem;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArV6NQ7n31qv1LWc5Jchyg0EeZV5O9TUgHw&usqp=CAU" class="card-img-top" alt="Coding Contest">
            <div class="card-body">
            <h5 class="card-title">${contest[item].name}</h5>
            <p>Starts at: ${contest[item].start_time}</p>
            <p>Ends at: ${contest[item].end_time}</p>
            <p>Status is: ${contest[item].status}</p>
            <p>In 24 Hours? ${contest[item].in_24_hours}</p>
            <p>Site: <b><i><u>${contest[item].site}</u></i></b></p>
            </div>
            <a href="${contest[item].url}" class="btn btn-primary" target="_blank">Visit Here</a>
        </div>
        `
    }
    let cardContainer = document.getElementById("cardContainer")
    cardContainer.innerHTML = ihtml
})

let n = localStorage.getItem("Note")
alert("Your Note is: "+ n)

let note = prompt("Enter your note")
if(note){
    localStorage.setItem("Note", note)
}
let ans = confirm("Do you want to delete the note?")
if(ans){
    localStorage.removeItem("Note")
    alert("Note Deleted Successfully")
}

