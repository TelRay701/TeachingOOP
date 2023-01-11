// Encapsulation allows for you to be able to develop robust software
// Your setting the appropiate access boundaries to class data from calling code.
// You will have better controll of class attributes and methods,
// and the option to certain members read or write only.

// This all helps to ensure that the code is of higher quality snf easier to maintain

class Car {
  private _make: string;
  private _model: string;
  private _year: number;

  constructor(make: string, model: string, year: number) {
    this._make = make;
    this._model = model;
    this._year = year;
  }

  getMake(): string {
    return this._make;
  }

  setMake(make: string) {
    this._make = make;
  }

  getModel(): string {
    return this._model;
  }

  setModel(model: string) {
    this._model = model;
  }

  getYear(): number {
    return this._year;
  }

  setYear(year: number) {
    this._year = year;
  }
}

let typeCar = new Car("Hyundai", "Sonata", 2001);
console.log(
  `My name is Ray Telpha and I drive a`,
  typeCar.getYear(),
  typeCar.getMake(),
  typeCar.getModel()
);
