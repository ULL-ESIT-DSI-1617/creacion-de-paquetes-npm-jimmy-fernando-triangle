'use strict'
let Shape = require('@ull-team-fernando-jimmy/ull-shape');

/**
* Clase de la forma Triangulo.
* @extends Shape
* @param {Object} options - Debe tener los siguiente atributos.
* @param {Number} options.width - Establece el ancho del Triangulo.
* @param {Number} options.height - Establece la altura del Triangulo.
* @example
*let Triangle = require('@ull-team-fernando-jimmy/ull-shape-triangle');
*let triangle = new Triangle({width: 10, height: 20});
*console.log(triangle.getArea()); //100
*/

class Triangle extends Shape {
    constructor(options) {
      super(options)
    }
    area() {
      return 0.5 * this.width * this.height;
    }
}

Shape.Shapes.Triangle = Triangle;
module.exports = Triangle;
