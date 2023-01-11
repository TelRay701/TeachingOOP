class Shape {
  constructor(public sides: number) {}

  getArea(): number {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super(4);
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(public base: number, public height: number) {
    super(3);
  }

  getArea(): number {
    return 0.5 * (this.base * this.height);
  }
}

let shapes: Shape[] = [new Rectangle(10, 5), new Triangle(10, 5), new Shape(0)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
