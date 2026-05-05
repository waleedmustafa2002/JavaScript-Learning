// Conditoional statement:
let money=10;
if(money>=20) {
    console.log("Take a texi");
    }else {
    console.log("walk home");
}


let moneys= 50;
if(moneys>=40){
    console.log("Yes");
}
else {
    console.log("No");
}



let time=14;
if(time < 11){
    console.log("Breakfast");
}
else if(time < 17){
    console.log("Lunch");
}
else {
    console.log("Dinner");
}



let times = 14; 

if (times < 15) {
  console.log("Breakfast");
} else if (times < 20) {
  console.log("Lunch");
} else {
  console.log("Dinner");
}



// Result check:

let marks=80;
if(marks<70){
    console.log( "Grade:A+");
}
else if (marks<50){
    console.log("Grade: A");
}
else if (marks<100){
    console.log("Grade: B+");
}
else{
    console.log("C");
}



let mark = 82;

if (mark >= 90) {
    console.log("Grade: A+");
} else if (mark >= 83) {
    console.log("Grade: A");
} else if (mark >= 84) {
    console.log("Grade: B");
} else if (mark >= 50) {
    console.log("Grade: Pass");
} else {
    console.log("Grade: Fail");
}


// //== only check value
// //=== value or type check
let currentMode = "light";

if (currentMode === 10) {
    console.log("Changing to Dark Mode...");
    
} else {
    console.log("Changing to Light Mode...");
}



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
  console.log("invalid");
}


//Switch statement:

let day = 3; 

switch(day){
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}
//let grade="B";

let grade="C"
switch(grade){
    case "A":
        console .log("Excellent");
    break;
    
    case "B":
    console.log("Very Good");
    break;
    
    case "C":
    console.log("Good");
    break;
    
    default:
    console.log("Poor");
}



let fruit="banana"; 
switch(fruit){
    case "apple":
    case "Mango":
    case "banana":
    console.log("This is a Fruit");
    break;
    
default:
console.log( "Not a fruit");
break;
}


// without break:
let num=1;
switch (num){
    case 1:
        console.log("One");
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
}


//Switch Statement:
let days= 5;
switch(days){
    case 1:
    console.log("Monday");
break;

case 2:
console.log("Tuesday");
break;

    case 3:
    console.log("Wednesday");
    break;
    
    case 4:
    console.log("Thursday");
    break;
    
    case 5:
    console.log("Friday");
    break;
    
    case 6:
    console.log("Saturday");
    break;
    
    case 7:
    console.log("Sunday")
    break;
    
    default:
    console.log("invalid");
}

