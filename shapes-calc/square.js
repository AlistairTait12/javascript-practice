class Square {
  height;

  constructor(height) {
    this.height = height;
  }

  get area() {
    return this.calculateArea();
  }

  calculateArea() {
    return this.height ** 2;
  }
}

export default Square;
