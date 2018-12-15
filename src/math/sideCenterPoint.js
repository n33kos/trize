/**
 * A function to return the center point between two points
 * @function sideCenterPoint
 * @param {number} position
 */

import Vector2 from './vector2';

export default (a, b) => new Vector2(
  a.x + (b.x - a.x) * 0.5,
  a.y + (b.y - a.y) * 0.5,
);
