/**
 * A class to contain defaults for a point on a triangle
 * @class Point
 * @param {Object} config - configuration object
 * @param {Object} config.arc - Configuration object for an arc on this point of the triangle
 * @param {Object} config.side - Configuration object for the side starting with this point of the triangle
 * @param {Object} config.vertex - Configuration object for the vertex of this point
 * @param {Vector2} config.position - Position of the point
 */

import Vector2 from '../math/vector2';

export default class {
  constructor({
    arc = {
      color: 'black',
      width: 0,
      radius : 30,
    },
    side = {
      color: 'black',
      width: 1,
    },
    vertex = {
      color: 'black',
      width: 0,
    },
    position = new Vector2(),
  }) {
    this.arc = arc;
    this.side = side;
    this.vertex = vertex;
    this.position = position;
  }
}
