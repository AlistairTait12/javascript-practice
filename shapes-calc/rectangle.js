class Rectangle {
  height;
  width;

  constructor(height, width) {
    this.height = height,
    this.width = width;
  }

  get area() {
    return this.calculateArea();
  }

  calculateArea() {
    return this.height * this.width;
  }
}

export default Rectangle;
