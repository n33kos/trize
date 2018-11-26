/**
 * A class to draw a Line
 * @class Line
 * @param {Object} config - configuration object
 * @param {string} config.color - Color of the line
 * @param {Vector2} config.end - End position of the line
 * @param {Vector2} config.start - Start position of the line
 * @param {number} config.width - Width of the line
 */

import clipSpaceToPixels from '../render/clipSpaceToPixels';
import Vector2           from '../math/vector2';

export default class {
  constructor({
    color = 'black',
    end = new Vector2(),
    start = new Vector2(),
    width = 1,
  }) {
    this.color = color;
    this.end = end;
    this.start = start;
    this.width = width;
  }

  draw(canvas, ctx) {
    const startScreenPos = clipSpaceToPixels(canvas, this.start);
    const endScreenPos = clipSpaceToPixels(canvas, this.end);

    ctx.lineCap = 'round';
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.lineWidth = this.width;
    ctx.moveTo(startScreenPos.x, startScreenPos.y);
    ctx.lineTo(endScreenPos.x, endScreenPos.y);
    ctx.stroke();
  }
}
