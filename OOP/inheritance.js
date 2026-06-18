class Person {
    speak() {
        console.log("Person is speaking");
    }
}

class Student extends Person {
    study() {
        console.log("Student is studying");
    }
}

let s1 = new Student();

s1.speak();
s1.study();






class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Cat extends Animal {
    meow() {
        console.log("Cat says Meow");
    }
}

let c1 = new Cat();

c1.eat();
c1.meow();





class Vehicle {
    start() {
        console.log("Vehicle started");
    }
}

class Bike extends Vehicle {
    ride() {
        console.log("Bike is riding");
    }
}

let b1 = new Bike();

b1.start();
b1.ride();




//Constructor Inheritance

class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
}

let s1 = new Student("Ali");

console.log(s1.name);





class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }
}

let s1 = new Student("Ali", "A");

console.log(s1.name);
console.log(s1.grade);