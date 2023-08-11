let sentence = "Please give Rs 1000"
let amount = Number.parseInt(sentence.slice("Please give Rs ".length))
console.log(amount)
console.log(typeof amount)