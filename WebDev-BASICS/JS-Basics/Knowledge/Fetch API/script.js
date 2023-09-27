let country = prompt("Enter the country you want to know the weather: ")
let url = "https://api.weatherapi.com/v1/current.json?key=97d5954923994556aff170446231609&q=" + country + "&aqi=no"

let  p = fetch(url)
p.then((response) => {
    return response.json()
}).then((response) => {
    console.log(response);
    console.log(response.location.name + "-" + response.location.region);
})