/**
 * A class to draw a circle
 * @class Circle
 * @param {Object} config - configuration object
 * @param {number} config.arcEnd - End angle of the arc
 * @param {number} config.arcStart - Start angle of the arc
 * @param {number} config.clipRadius - Clip space radius (use one or the other)
 * @param {string} config.fillStyle - Fill style for the circle
 * @param {Vector2} config.position - Position of the circle's center point
 * @param {number} config.radius - Radius of the circle in pixels (use one or the other)
 * @param {boolean} config.shouldFill - Should the circle be filled
 * @param {boolean} config.shouldStroke - Should the circle be have a stroke
 * @param {string} config.strokeStyle - Stroke style of the circle
 * @param {number} config.strokeWidth - Stroke width of the circle
 */

import clipSpaceToPixels from '../render/clipSpaceToPixels';
import distance          from '../math/distance';
import Vector2           from '../math/vector2';

export default class {
  constructor({
    arcEnd = Math.PI * 2,
    arcStart = 0,
    clipRadius = null,
    fillStyle = '#000000',
    position = new Vector2(0, 0),
    radius = null,
    shouldFill = true,
    shouldStroke = false,
    strokeStyle = '#000000',
    strokeWidth = 1,
  }) {
    this.arcEnd = arcEnd;
    this.arcStart = arcStart;
    this.clipRadius = clipRadius;
    this.fillStyle = fillStyle;
    this.position = position;
    this.radius = radius;
    this.shouldFill = shouldFill;
    this.shouldStroke = shouldStroke;
    this.strokeStyle = strokeStyle;
    this.strokeWidth = strokeWidth;
  }

  getPixelRadiusFromClipRadius(canvas) {
    return distance(
      clipSpaceToPixels(canvas, new Vector2(0, 0)),
      clipSpaceToPixels(canvas, new Vector2(this.clipRadius, 0)),
    );
  }

  draw(canvas, ctx) {
    const screenPos = clipSpaceToPixels(canvas, this.position);

    let radius = this.radius;
    if (!this.radius) radius = this.getPixelRadiusFromClipRadius(canvas);

    if (this.shouldFill) {
      ctx.fillStyle = this.fillStyle;

      ctx.beginPath();
      ctx.arc(
        screenPos.x,
        screenPos.y,
        radius,
        this.arcStart,
        this.arcEnd,
        true, // Counterclockwise
      );
      ctx.fill();
    }

    if (this.shouldStroke) {
      ctx.strokeStyle = this.strokeStyle;
      ctx.lineWidth = this.strokeWidth;

      ctx.beginPath();
      ctx.arc(
        screenPos.x,
        screenPos.y,
        radius,
        this.arcStart,
        this.arcEnd,
        true, // Counterclockwise
      );
      ctx.stroke();
    }
  }
}
