// Encapsulation allows for you to be able to develop robust software
// Your setting the appropiate access boundaries to class data from calling code.
// You will have better controll of class attributes and methods,
// and the option to certain members read or write only.
// This all helps to ensure that the code is of higher quality snf easier to maintain
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this._make = make;
        this._model = model;
        this._year = year;
    }
    Car.prototype.getMake = function () {
        return this._make;
    };
    Car.prototype.setMake = function (make) {
        this._make = make;
    };
    Car.prototype.getModel = function () {
        return this._model;
    };
    Car.prototype.setModel = function (model) {
        this._model = model;
    };
    Car.prototype.getYear = function () {
        return this._year;
    };
    Car.prototype.setYear = function (year) {
        this._year = year;
    };
    return Car;
}());
var typeCar = new Car("Hyundai", "Sonata", 2001);
console.log("My name is Ray Telpha and I drive a", typeCar.getYear(), typeCar.getMake(), typeCar.getModel());
