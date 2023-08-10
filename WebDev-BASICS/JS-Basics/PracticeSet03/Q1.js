let marks = {
    Pratik : 100,
    Sarthak : 5,
    Ritwik : 10
};

// console.log(Object.keys(marks));
// console.log((marks));

for(let i=0; i<Object.keys(marks).length; i++){
    console.log("Mark of", Object.keys(marks)[i], "is", marks[Object.keys(marks)[i]]);
}