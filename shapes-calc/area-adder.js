import Rectangle from "./rectangle.js";
import Square from "./square.js";

let shapes = [
  new Square(3),
  new Rectangle(2, 4),
  new Square(6),
  new Square(7)
];

shapes.forEach(shape => {
  console.log(shape.area);
});
