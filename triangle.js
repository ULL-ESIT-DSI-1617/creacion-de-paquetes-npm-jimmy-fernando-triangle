'use strict'
let Shape = require('@ull-team-fernando-jimmy/ull-shape');

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
