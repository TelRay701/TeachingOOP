// Abstraction in OOP is a concept that "shows" only essenctial attributes and
// "hides" unnecessary information

// Abstraction is useful if you would like to hide unnecessary details from the users.

abstract class Vehicle {
  constructor(public wheels: number) {}

  abstract drive(): void;
  abstract honk(): void;
}

class Car1 extends Vehicle {
  constructor(wheels: number, public make: string, public model: string) {
    super(wheels);
  }

  drive() {
    console.log(`The ${this.make} ${this.model} is driving.`);
  }

  honk() {
    console.log("Beep beep!");
  }
}

class Bicycle extends Vehicle {
  constructor(wheels: number, public color: string) {
    super(wheels);
  }

  drive() {
    console.log(`The ${this.color} bicycle is being pedaled.`);
  }

  honk() {
    console.log("Ring ring!");
  }
}
let all = new Car1(4, "Dodge", "Durango");
let all1 = new Bicycle(2, "blue");
all.drive();
all.honk();
all1.drive();
all1.honk();
