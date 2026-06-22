// class Person {
//     speak() {
//         console.log("Person is speaking");
//     }
// }

// class Student extends Person {
//     study() {
//         console.log("Student is studying");
//     }
// }

// let s1 = new Student();

// s1.speak();
// s1.study();






// class Animal {
//     eat() {
//         console.log("Animal is eating");
//     }
// }

// class Cat extends Animal {
//     meow() {
//         console.log("Cat says Meow");
//     }
// }

// let c1 = new Cat();

// c1.eat();
// c1.meow();





// class Vehicle {
//     start() {
//         console.log("Vehicle started");
//     }
// }

// class Bike extends Vehicle {
//     ride() {
//         console.log("Bike is riding");
//     }
// }

// let b1 = new Bike();

// b1.start();
// b1.ride();

// class Bike extends Vehicle {
//     ride() {
//         console.log("Bike is riding");
//     }
// }

// let b1 = new Bike();

// b1.start();
// b1.ride();




// //Constructor Inheritance

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Student extends Person {
// }

// let s1 = new Student("Ali");

// console.log(s1.name);





// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Student extends Person {
//     constructor(name, grade) {
//         super(name);
//         this.grade = grade;
//     }
// }

// let s1 = new Student("Ali", "A");

// console.log(s1.name);
// console.log(s1.grade);




// //Constructor Inheritance

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Student extends Person {
// }

// let s1 = new Student("Ali");

// console.log(s1.name);





// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Student extends Person {
//     constructor(name, grade) {
//         super(name);
//         this.grade = grade;
//     }
// }

// let s1 = new Student("Ali", "A");

// //Constructor Inheritance

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Student extends Person {
// }

// let s1 = new Student("Ali");

// console.log(s1.name);





// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Student extends Person {
//     constructor(name, grade) {
//         super(name);
//         this.grade = grade;
//     }
// }

// let s1 = new Student("Ali", "A");

// console.log(s1.name);
// console.log(s1.grade);




//Single Inheritence task:

class Animal{
eat()
{
    console.log("Animal is eating");
}

// console.log(s1.name);
// console.log(s1.grade);



//Multilevel inheritance


// //Multilevel inheritance

// class Person {
//     speak() {
//         console.log("Person is speaking");
//     }
// }

// class Student extends Person {
//     study() {
//         console.log("Student is studying");
//     }
// }

// class Monitor extends Student {
//     manageClass() {
//         console.log("Monitor is managing class");
//     }
// }

// let m1 = new Monitor();

// m1.speak();
// m1.study();
// m1.manageClass();



// class Vehicle {
//     start() {
//         console.log("Vehicle started");
//     }
// }

// class Car extends Vehicle {
//     drive() {
//         console.log("Car is driving");
//     }
// }

// class SportsCar extends Car {
//     turbo() {
//         console.log("Turbo mode ON");
//     }
// }

// let s1 = new SportsCar();

// s1.start();
// s1.drive();
// s1.turbo();



//Hierarchical Inheritance
class Person {
    speak() {
        console.log("Person is speaking");
    }
}
class Dog extends Animal{
    bark()
    {
        console.log("Dog is barking")

    }
}

let d1=new Dog();
d1.eat();
d1.bark();



class Vehicle{
    start()
    {
        console.log("Vehicle started")
    }
}
class car extends Vehicle{
drive()
{
    console.log("Car is driving")
}

}
let c1=new car();

c1.start();
c1.drive();
class Student extends Person {
    study() {
        console.log("Student is studying");
    }
}

class Teacher extends Person {
    teach() {
        console.log("Teacher is teaching");
    }
}

let s1 = new Student();
let t1 = new Teacher();

s1.speak();
s1.study();

t1.speak();
t1.teach();
class Monitor extends Student {
    manageClass() {
        console.log("Monitor is managing class");
    }
}

let m1 = new Monitor();

m1.speak();
m1.study();
m1.manageClass();


class Employee{
    work()
    {
        console.log("Employee is working")
    }
}
class Manager extends Employee{
    manage()
    {
        console.log("Manager is managing")

class Employee {
    work() {
        console.log("Employee is working");
    }
}

class Manager extends Employee {
    manage() {
        console.log("Manager is managing");
    }
}

class Developer extends Employee {
    code() {
        console.log("Developer is coding");
    }
}

let m1 = new Manager();
let d1 = new Developer();

m1.work();
m1.manage();

d1.work();
d1.code();
class Vehicle {
    start() {
        console.log("Vehicle started");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Car is driving");
    }
}

class SportsCar extends Car {
    turbo() {
        console.log("Turbo mode ON");
    }
}
let m1= new Manager();

m1.work();
m1.manage();


let s1 = new SportsCar();

s1.start();
s1.drive();
s1.turbo();
