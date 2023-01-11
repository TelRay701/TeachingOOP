// Inheritance is a key feature of object-oriented programming,
// and TypeScript has made it a first-class feature of the language.

// Allow developers to create new classes that will ultimatey end up
// becoming a modified version of an already existing class.

// base (parent) class

class Person {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `Hi my name is ${this.firstName} ${this.lastName}. `;
  }
}

// From this example, you can inherit an Employee class by using the "extends" keyword in a child class.
// derived (child) classes
// The Employee Class has inherited all of the base class code

class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    super(firstName, lastName);
  }
  describe(): string {
    return super.describe() + `I'm a ${this.jobTitle}.`;
  }
}
let employee = new Employee("Ray", "Telpha", "Coding Apprentice");
console.log(employee.getFullName());
console.log(employee.describe());
