//VARIABLES:- 

let name="Pratik";
console.log(name);

//Naming variables:
// Cannot be a reserved keyword
//eg: if let else var so-on
//should be meaningful
//Cannot start with a number
//Cannot contain a space or -
//Are case-sensitive

//CONSTANTS:-
const interestRate=3.5;
// interestRate=1;
console.log(interestRate);

//const="if value not change ever"
//let="if value will change later"

//PRIMITIVE TYPES:-String, Number, Boolean, undefined, null
//REFERENCE TYPES:-

let myName='Pratik'; //String literal
let age=22; //Number literal
let flag=true; //Boolean literal
let firstName; //Undefined literal
let lastName=null; //Null literal
console.log(myName + ' ' + age + ' ' + flag + ' ' + firstName + ' ' + lastName);
console.log(typeof myName);
myName=1;
console.log(typeof myName);
console.log(typeof firstName);
console.log(typeof lastName);

//OBJECT:-

// let goodName="Sipun";
// let myAge=22; // Not needed as its in Object Key.
let person={
    goodName: 'Sipun',
    myAge: 22
    //goodName and myAge is the key in Person Object
};
console.log(person);

//Dot Notation
person.goodName='John';
console.log(person.goodName);
console.log(person.myAge);

//Bracket Notation
person['goodName']='Mary';
console.log(person['goodName']);
console.log(person['myAge']);

//Bracket Notation in dynamic way
let selectNotation='goodName';
person[selectNotation]='Mary';
console.log(person[selectNotation]);
console.log(person['myAge']);

//ARRAYS:
let selectedColors=['Red', 'Blue'];
console.log(selectedColors);
console.log(selectedColors[0]);//using index
//Array Dynamic
selectedColors[2]='Green';
console.log(selectedColors);
// Array can be contain any type with any type
selectedColors[4]=5;
console.log(selectedColors);

//FUNCTION:
function greet(){
    console.log('Hello World');
}

//function with parameters
function greet2(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

//calling a function:
greet();
greet2('Sipun2', 'Sahoo');
greet('Hi');

//Return value in function:
function Square(number){
    return number*number;
}

console.log(Square(2));
console.log(Square);
console.log(function);