// Practice Task:
 //red → Stop
 //yellow → Ready
 //green → Go
// switch:

 let color= "yellow";
 switch(color){
 case  "red":
     console.log("Stop");
     break;
 case "yellow":
 console.log("Ready");
 break;
 case "green":
 console.log("Go");
 break;

 default:
 console.log("No");
 }
// if,else if,else:

 let colors = "red";

 if (colors === "red") {
   console.log("Stop");
 }
 else if (colors === "yellow") {
   console.log("Ready");
 }
 else if (colors === "green") {
   console.log("Go");
 }
 else {
   console.log("Invalid color");
 }

//switch:

 let a = 10;
 let b = 5;
let op = "*";

 switch(op){
   case "+":
     console.log(a + b);
     break;
   case "-":
     console.log(a - b);
     break;
   case "*":
     console.log(a * b);
     break;
   case "/":
     console.log(a / b);
     break;
  default:
     console.log("Invalid operator");
 }


 // check number even or odd:

let num=8;
if(num % 2===0){
console.log("Even");
}
else{
  console.log("Odd");
}

 //Check number positive or negative:

let num=3;
if (num > 0){
  console.log("Positive");
}
else if (num < 0){
 console.log("Negative");
}
else {
  console.log("Zero");
}


 // Age check:

let age=20;
if(age>=18){
  console.log("Adult");
}
else{
  console.log("Monir");
}


 // comapre 2 number which one greater:

let num1 =10;
let num2=20;
if (num1 > num2){
  console.log("num1 is greater");
}
else if(num1 < num2){
  console.log("num2 is greater");
}
else{
console.log("Not Equal");
}


// pass or fail:

let marks=45;
if (marks >= 40){
  console.log("Pass");
}
else{
  console.log("Fail");
}


//Grade system:

let marks=50;
if(marks >= 80){
  console.log("A");
}
else if (marks >= 60){
  console.log("B");
}
else if (marks >= 40){
console.log("C");
}
else{
  console.log("Fail");
}


//Divisible check:

let num=15;
if(num %5 === 0 && num %3 === 0){
  console.log("Divisible by 5 and 3");
}
else {
 console.log("Not Divisible");
}


 //Login Check:
 
let username="admin";
let password="1234";
if(username === "admin" && password === "1234") {
  console.log("Login Successful");
}
else {
  console.log("wrong Credentials");
}
