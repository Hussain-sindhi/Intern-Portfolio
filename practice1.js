/* // cretae variable of type string and try to add a number in it.
let email = "husssain"
email = email + 123 + "@gmail.com"
console.log(email);

// use typeof opertaor to find the datatype of the string in last question
console.log(typeof email);

// create a const object in js can you change it to hold a number later ?
const person = {
    name : "hussain",
    age : 21,
    gender : "male"
}

// person = 100; // error bcz const but its possible in let and var 
person.age = 20;

// try to add a new key to the const object in problem 3 where you able to do it ?
person.Phone = "034567890";
console.log(person);

// write a js program to create a word-meaning dictionary of 5 words
const dictionary = {
    "hello": "hi",
    "bye": "good bye",
    "how are you": "fine",
    "what is your name": "Hussain",
    "who are you": "I am a student"
};

console.log(dictionary); */

// Q1 — Variables & Arithmetic Operators
// Declare two variables, num1 and num2 , with any numbers you like. Print their sum, difference, product, and
// quotient, each on its own line with a label (e.g. "Sum: 15" ).
let num1 = 10;
let num2 = 20;
console.log("sum",num1 + num2);
console.log("product",num1 * num2);
console.log("quotient",num1 / num2);

// Q2 — Swap Two Variables
// Declare a = 5 and b = 10 . Without hardcoding the values, swap them so a becomes 10 and b becomes
// 5, then print both. (Hint: you’ll need a third temporary variable.)
let a = 5;
let b = 10;

let temp = a; // temp = 5
a = b;  // a = 10
b = temp; // b = 5
console.log("a = ",a);
console.log("b = ", b);


// Q3 — Comparison & Logical Operators
// Declare age = 22 and hasID = true . Write a single expression using && that checks whether the person is 18 or older and has an ID. Print true or false .
let age = 22;
let hasID = true;

console.log(age >= 18 && hasID);

// Q4 — Basic if / else
// Declare a variable num . Print "Positive" if it’s greater than 0, or "Not Positive" otherwise. Test it with at least two different values.
let num = 5;

if(num > 0){
    console.log("Positive");
}
else{
    console.log("Not Positive"); 
}

// Q5 — if / else if / else Grading System
// Declare marks (0–100). Print the grade using this scale: - 90 and above → "A" - 75–89 → "B" - 60–74 → "C" - Below 60 → "F"
let marks = 80;
if(marks >= 90){
    console.log("A");
}
else if(marks >= 75){
    console.log("B");
}
else if(marks >= 60){
    console.log("C");
}
else{
    console.log("F");
}

// Q6 — switch Statement
// Declare dayNumber (1–7). Use a switch to print the day’s name ( 1 → "Monday" , 2 → "Tuesday" , etc.), with a default case that prints "Invalid day" .
let day

// Q7 — Fix the Missing break
// Below is a broken switch — copy it into your file exactly as-is, run it, and observe the output: