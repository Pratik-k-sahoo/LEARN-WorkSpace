let promise = new Promise(function(resolve, reject){
    alert("I am an alert in promise")
    resolve(56);
});
console.log("Hello")

setTimeout(function(){
    console.log('Hello in 2 seconds')
}, 2000)
console.log("Hi my name is" + " John")
console.log(promise)


//Fetch Google.com Homepage ==> alert(Google.com Homepage Done)
//fetch data from the data api ==> alert()
//fetch pictures from the server
//Print downloading
//Rest of the script

