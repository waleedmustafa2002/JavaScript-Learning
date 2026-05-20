Simple classes:


class Toy {

    move ()
    {
        console.log('toy is moving')   
    
    }
}

let car = new Toy();
car.move()

let robot = new Toy()
robot.move()




class Sound {

    make_sound(sound)
    {
        console.log(sound)
    }
}

let cat = new Sound();
cat.make_sound("meow");

let dog = new Sound()
dog.make_sound("whoof");




class Fruit {

    fruitName(name)
    {
        console.log(name)
    }

}

let f1 = new Fruit();
f1.fruitName("Apple");

let f2 = new Fruit();
f2.fruitName("Mango");



class Bird {

    fly(name)
    {
        console.log(name)
    }

}

let b1 = new Bird();
b1.fly("Sparrow");

let b2 = new Bird();
b2.fly("Parrot");



class Mobile {

    model(name)
    {
        console.log(name)
    }

}

let m1 = new Mobile();
m1.model("Samsung");

let m2 = new Mobile();
m2.model("iPhone");



class Game {

    play(name)
    {
        console.log(name)
    }

}

let g = new Game();

g.play("Cricket");
g.play("Football");



class Bike {

    run()
    {
        console.log('bike is running')
    }

}

let honda = new Bike();
honda.run()

let yamaha = new Bike();
yamaha.run()


class Light {

    glow()
    {
        console.log('light is glowing')
    }

}

let bulb = new Light();
bulb.glow()

let lamp = new Light();
lamp.glow()