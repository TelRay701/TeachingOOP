// Abstraction in OOP is a concept that "shows" only essenctial attributes and
// "hides" unnecessary information
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Abstraction is useful if you would like to hide unnecessary details from the users.
var Vehicle = /** @class */ (function () {
    function Vehicle(wheels) {
        this.wheels = wheels;
    }
    return Vehicle;
}());
var Car1 = /** @class */ (function (_super) {
    __extends(Car1, _super);
    function Car1(wheels, make, model) {
        var _this = _super.call(this, wheels) || this;
        _this.make = make;
        _this.model = model;
        return _this;
    }
    Car1.prototype.drive = function () {
        console.log("The ".concat(this.make, " ").concat(this.model, " is driving."));
    };
    Car1.prototype.honk = function () {
        console.log("Beep beep!");
    };
    return Car1;
}(Vehicle));
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(wheels, color) {
        var _this = _super.call(this, wheels) || this;
        _this.color = color;
        return _this;
    }
    Bicycle.prototype.drive = function () {
        console.log("The ".concat(this.color, " bicycle is being pedaled."));
    };
    Bicycle.prototype.honk = function () {
        console.log("Ring ring!");
    };
    return Bicycle;
}(Vehicle));
var all = new Car1(4, "Dodge", "Durango");
var all1 = new Bicycle(2, "blue");
all.drive();
all.honk();
all1.drive();
all1.honk();
