//Bank Account:
class BankAccount {
  #balance;   

  constructor(balance) {
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let acc = new BankAccount(1000);

acc.deposit(500);
console.log(acc.getBalance());




//Student:
class Student{
    #marks;

    constructor(marks){
        this.#marks=marks;
    }

    setMarks(marks) {
        this.#marks=marks;
    }

    getMarks(){
return this.#marks;
    }
}
let s1=new Student(20);

s1.setMarks(50);
console.log(s1.getMarks());




//Book:
class Book {
    #title;

    constructor(title) {
        this.#title = title;
    }

    setTitle(title) {
        this.#title = title;
    }

    getTitle() {
        return this.#title;
    }
}

let b1 = new Book("English");

b1.setTitle("JavaScript");

console.log(b1.getTitle());




//person:
class Person {
    #name;

    constructor(name) {
        this.#name = name;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

let p1 = new Person("Ali");

p1.setName("Ahmed");

console.log(p1.getName());




//Mobile Phone:
class Mobile {
    #brand;

    constructor(brand) {
        this.#brand = brand;
    }

    setBrand(brand) {
        this.#brand = brand;
    }

    getBrand() {
        return this.#brand;
    }
}

let m1 = new Mobile("Samsung");

m1.setBrand("iPhone");

console.log(m1.getBrand());




//Course:
class Course {
    #courseName;

    constructor(courseName) {
        this.#courseName = courseName;
    }

    setCourse(courseName) {
        this.#courseName = courseName;
    }

    getCourse() {
        return this.#courseName;
    }
}

let c1 = new Course("Math");

c1.setCourse("Computer Science");

console.log(c1.getCourse());




//SChool:
class School {
    #name;

    constructor(name) {
        this.#name = name;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

let school1 = new School("Govt School");

school1.setName("City School");

console.log(school1.getName());




//Vehicle:
class Vehicle {
    #type;

    constructor(type) {
        this.#type = type;
    }

    setType(type) {
        this.#type = type;
    }

    getType() {
        return this.#type;
    }
}

let v1 = new Vehicle("Car");

v1.setType("Bike");

console.log(v1.getType());




//Vehicle:
class Vehicle {
    #type;

    constructor(type) {
        this.#type = type;
    }

    setType(type) {
        this.#type = type;
    }

    getType() {
        return this.#type;
    }
}

let v1 = new Vehicle("Car");

v1.setType("Bike");

console.log(v1.getType());





//person class:

// Person:
class Person {
    #name;

    constructor(name) {
        this.#name = name;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

let p1 = new Person("Alice");

p1.setName("Bob");

console.log(p1.getName());