/**
 * A class to draw a vertex
 * @class Vertex
 * @param {Object} config - configuration object
 * @param {string} config.color - Color of the vertex
 * @param {Vector2} config.position - Position of the vertex
 * @param {number} config.width - Width of the vertex
 */

import clipSpaceToPixels from '../render/clipSpaceToPixels';
import Vector2           from '../math/vector2';

export default class {
  constructor({
    color = 'black',
    position = new Vector2(),
    width = 1,
  }) {
    this.color = color;
    this.position = position;
    this.width = width;
  }

  draw(canvas, ctx) {
    const screenPos = clipSpaceToPixels(canvas, this.position);

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      screenPos.x,
      screenPos.y,
      this.width,
      0,
      Math.PI * 2,
    );
    ctx.fill();
  }
}
