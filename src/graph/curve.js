/**
 * A class to draw a curve on a graph
 * @class Curve
 * @param {Object} config - configuration object
 * @param {string} config.color - Color of the curve
 * @param {Vector2[]} config.points - An array of Vector2 objects to draw a curve through
 * @param {int} config.lineWidth - Width of the curve
 * @param {element} config.canvas - The canvas element
 * @param {int} config.tension - Spline tension, changes how straign the curves are
 */

import clipSpaceToPixels from '../render/clipSpaceToPixels';
import Vector2           from '../math/vector2';

export default class {
  constructor({
    color = 'rgba(0, 0, 0, 1)',
    points,
    lineWidth = 1,
    canvas,
    tension = 0.5,
  }) {
    this.color = color;
    this.lineWidth = lineWidth;
    this.tension = tension,
    this.canvas = canvas;

    this.points = this.transformPoints(points);
  }

  transformPoints(points) {
    const transformedPoints = [];

    points.forEach(point => {
      const position = clipSpaceToPixels(this.canvas, point);
      transformedPoints.push(new Vector2(position.x, position.y));
    });

    return transformedPoints;
  }

  resize(canvas, ctx, points) {
    this.points = this.transformPoints(points);
  }

  draw(canvas, ctx) {
    ctx.beginPath();
    ctx.moveTo((this.points[0].x), this.points[0].y);

    for(let i = 0; i < this.points.length-1; i ++)
    {
      const x_mid = (this.points[i].x + this.points[i+1].x) / 2;
      const y_mid = (this.points[i].y + this.points[i+1].y) / 2;
      const cp_x1 = (x_mid + this.points[i].x) / 2;
      const cp_x2 = (x_mid + this.points[i+1].x) / 2;
      ctx.quadraticCurveTo(cp_x1,this.points[i].y ,x_mid, y_mid);
      ctx.quadraticCurveTo(cp_x2,this.points[i+1].y ,this.points[i+1].x,this.points[i+1].y);
    }

    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
}
