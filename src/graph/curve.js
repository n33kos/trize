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
    this.controlPoints = this.generateControlPoints();
  }

  transformPoints(points) {
    const transformedPoints = [];

    points.forEach(point => {
      const position = clipSpaceToPixels(this.canvas, point);
      transformedPoints.push(position.x, position.y);
    });

    return transformedPoints;
  }

  controlPointsFunc(x1, y1, x2, y2, x3, y3) {
    const v = this.va(this.points, 0, 2);
    const d01 = this.distanceArray(this.points, 0, 1);
    const d12 = this.distanceArray(this.points, 1, 2);
    const d012 = d01 + d12;
    return [
      x2 - v[0] * this.tension * d01 / d012,
      y2 - v[1] * this.tension * d01 / d012,
      x2 + v[0] * this.tension * d12 / d012,
      y2 + v[1] * this.tension * d12 / d012
    ];
  }

  generateControlPoints() {
    let controlPoints = [];

    for (let i = 0; i < this.points.length - 2; i += 1) {
      controlPoints = controlPoints.concat(this.controlPointsFunc(
        this.points[2*i],
        this.points[2*i+1],
        this.points[2*i+2],
        this.points[2*i+3],
        this.points[2*i+4],
        this.points[2*i+5]
      ));
    }

    return controlPoints;
  }

  distanceArray(arr, i, j) {
    return Math.sqrt(Math.pow(arr[2*i]-arr[2*j], 2) + Math.pow(arr[2*i+1]-arr[2*j+1], 2));
  }

  va(arr, i, j){
    return [arr[2*j]-arr[2*i], arr[2*j+1]-arr[2*i+1]]
  }

  resize(canvas, ctx, points) {
    console.log(points);
    this.points = this.transformPoints(points);
    this.controlPoints = this.generateControlPoints();
  }

  draw(canvas, ctx) {
    ctx.beginPath();

    // probably move this clipspace out
    const initialPosition = clipSpaceToPixels(canvas, this.points[0]);
    ctx.moveTo(initialPosition.x, initialPosition.y);

    // For first span use quadratic curve
    ctx.quadraticCurveTo(this.controlPoints[0], this.controlPoints[1], this.points[2], this.points[3]);

    // For all middle points use with bezier
    for(let i = 2; i < this.points.length - 1; i++) {
      ctx.bezierCurveTo(
        this.controlPoints[(2*(i-1)-1)*2],
        this.controlPoints[(2*(i-1)-1)*2+1],
        this.controlPoints[(2*(i-1))*2],
        this.controlPoints[(2*(i-1))*2+1],
        this.points[i*2],
        this.points[i*2+1]
      );
    }

    // For last span use a quadratic curve
    ctx.quadraticCurveTo(
      this.controlPoints[(2*((this.points.length - 1)-1)-1)*2],
      this.controlPoints[(2*((this.points.length - 1)-1)-1)*2+1],
      this.points[(this.points.length - 1)*2],
      this.points[(this.points.length - 1)*2+1]
    );

    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
}
