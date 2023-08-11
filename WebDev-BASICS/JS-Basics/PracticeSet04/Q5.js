// Replace is possible 

let sentence = "Please give Rs 1000"
let replace = sentence.replace(sentence[3], "n")
console.log(replace)

// BUT Change is not possible as String is emmutable
sentence[3]="n"
console.log(sentence)