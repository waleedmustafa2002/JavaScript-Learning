// adding numbers:
function add(a, b) {
    return a + b;
}

let result = add(5, 3);

console.log(result);


//Check even number:
function even(n){
    return n % 2 === 0;
}

console.log(even(4));



//simple Greeting function:

function greet(name)
{
    console.log("Hello " + name);
}
greet("Waleed");



// Multiply NUmbers:

function Multiply(a,b)
{
    console.log(a*b);
    console.log(a/b);
}
Multiply(5,5);
Multiply(25,5);


//Square number:
function square(n){
    return n*n;
}
console.log(square(2));


    
const evenOdd = () => (21 % 2 === 0 ) ? console.log("even") : console.log("oddd")

evenOdd()


let say = () => {
  console.log("Hi");
};


say = () => {
  console.log("Bye1");
};

say = () => {
  console.log("Bye2");
};

say = () => {
  console.log("Bye3");
};


say = () => {
  console.log("Bye4");
};

say();



console.log(name);

let name = "Ali";


let check=() => (23 %2 === 0) ? console.log("even") : console.log("odd")
check()


// check numbers 
function checkNumber(n)
{
    if(n>0){
        return("positive numbers");
    }

    else{
        return("Negative numbers")
}

}
console.log(checkNumber(5));
console.log(checkNumber(-5));


//checkeven odd:
function checkEvenOdd(n)
{
    if( n % 2=== 0){
        return("Even");
    
    }
    else{
        return("Odd");
    }
}
console.log(checkEvenOdd(10));
console.log(checkEvenOdd(11));
    



function checkNumber(n) {
    if (n % 2 === "number") {
        return "even";
    }
    else if (n % 2 !== 0) {
        return "odd";
    }
    else {
        return "error";
    }
}

console.log(checkNumber(12));
console.log(checkNumber(-7));
//console.log(checkNumber("hello"));




//Grade check:
function getGrade(marks) {
    if (marks >= 80) {
        return "A";
    }
    else if (marks >= 60) {
        return "B";
    }
    else if (marks >= 40) {
        return "C";
    }
    else if (marks >= 0) {
        return "Fail";
    }
    else {
        return "Error";
    }
}

console.log(getGrade(85));
console.log(getGrade(70));
console.log(getGrade(30));






//Find Smallest Number:
function smallNumber(a, b) {

    if (a < b) {
        return "A is smaller";
    }
    else if (b < a) {
        return "B is smaller";
    }
    else {
        return "Equal";
    }
}

console.log(smallNumber(3, 8));



//Day check:
function day(num) {

    if (num === 1) {
        return "Monday";
    }
    else if (num === 2) {
        return "Tuesday";
    }
    else if (num === 3) {
        return "Wednesday";
    }
    else {
        return "Invalid Day";
    }
}

console.log(day(1));
console.log(day(3));
console.log(day(7));



// Divisible by5:
function checkFive(n) {
    if (n % 5 === 0) {
        return "Divisible by 5";
    }
    else {
        return "Not divisible by 5";
    }
}

console.log(checkFive(10));




//Check Character Vowel or Not:
function vowel(ch) {

    if (ch === "a") {
        return "Vowel";
    }
    else if (ch === "e") {
        return "Vowel";
    }
    else if (ch === "i") {
        return "Vowel";
    }
    else if (ch === "o") {
        return "Vowel";
    }
    else if (ch === "u") {
        return "Vowel";
    }
    else {
        return "Not Vowel";
    }
}

console.log(vowel("a"));
console.log(vowel("z"));




// Age check:
const checkAge = (age) => {

    if (age >= 18) {
        return "Adult";
    }
    else {
        return "Child";
    }
}

console.log(checkAge(20));
console.log(checkAge(10));


//Check result:
const result = (marks) => {

    if (marks >= 40) {
        return "Pass";
    }
    else {
        return "Fail";
    }
}

console.log(result(70));
console.log(result(20));
