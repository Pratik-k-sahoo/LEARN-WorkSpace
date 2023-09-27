console.log(document.cookie);
document.cookie = "name=PRATIKsAHOO12260"
document.cookie = "name1=PRATIKsAHOO12261"
document.cookie = "name2=PRATIKsAHOO12262"
document.cookie = "name3=PRATIKsAHOO12263"
document.cookie = "name=PRATIKsAHOO12263"
let key = prompt("Enter the key")
let value = prompt("Enter the value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie);
