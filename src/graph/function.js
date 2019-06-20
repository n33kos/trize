/**
 * A class to draw a function on a graph
 * @class Function
 * @param {Object} config - configuration object
 * @param {element} config.canvas - The canvas element
 * @param {function} config.condition - A function for the iteration condition, returns a boolean
 * @param {boolean} config.drawCurve - Should we draw smoothed curves through the points
 * @param {boolean} config.drawLines - Should we draw straight lines between points
 * @param {boolean} config.drawPoints - Should we draw the graph points
 * @param {function} config.func - Function to graph. Takes argument of n and returns a Vector2 for a position
 * @param {Graph} config.graph - The graph class the function eill be drawn on
 * @param {function} config.incrementExpression - A function to for the iteration increment Takes argument of i and returns incremented value
 * @param {int} config.initialValue - Inital value to start n at in the function
 * @param {string} config.lineColor - Color of the lines
 * @param {int} config.lineWidth - Width of the lines to draw
 * @param {string} config.pointColor - Color of the points
 * @param {int} config.pointWidth - Width of the points
 */

import clipSpaceToPixels from '../render/clipSpaceToPixels';
import Vector2           from '../math/vector2';
import Vertex            from '../geometry/vertex';
import Curve             from '../graph/curve';

export default class {
  constructor({
    canvas,
    condition = (i) => i < 10,
    drawCurve = true,
    drawLines = false,
    drawPoints = true,
    func = (n) => new Vector2(n + 1, n + 1),
    graph,
    incrementExpression = (i) => i + 1,
    initialValue = 0,
    lineColor = 'black',
    lineWidth = 2,
    pointColor = 'black',
    pointWidth = 4,
  }) {
    this.canvas = canvas;
    this.condition = condition;
    this.drawCurve = drawCurve;
    this.drawLines = drawLines,
    this.drawPoints = drawPoints;
    this.func = func;
    this.graph = graph;
    this.incrementExpression = incrementExpression;
    this.initialValue = initialValue;
    this.lineColor = lineColor;
    this.lineWidth = lineWidth;
    this.pointColor = pointColor;
    this.pointWidth = pointWidth;

    this.plotPoints();
    this.generateCurve();
  }

  plotPoints() {
    this.points = [];
    this.pointObjects = [];

    for (let i = this.initialValue; this.condition(i); i = this.incrementExpression(i)) {
      const rawPosition = this.func(i);
      const graphPosition = new Vector2(
        rawPosition.x * this.graph.clipSpaceSize.x,
        rawPosition.y * this.graph.clipSpaceSize.y,
      );

      this.points.push(graphPosition);
      this.pointObjects.push(
        new Vertex({
          color    : this.pointColor,
          position : graphPosition,
          width    : this.pointWidth,
        })
      );
    }
  }

  generateCurve() {
    this.curve = new Curve({
      points    : this.points,
      color     : this.lineColor,
      lineWidth : this.lineWidth,
      canvas    : this.canvas,
      tension   : 0.5,
    });
  }

  drawStraightLines(canvas, ctx) {
    const initialPosition = clipSpaceToPixels(canvas, this.points[0]);
    ctx.moveTo(initialPosition.x, initialPosition.y);

    ctx.beginPath();
    for(let i = 0; i < this.points.length; i++) {
      const pointPosition = clipSpaceToPixels(canvas, this.points[i]);
      ctx.lineTo(pointPosition.x, pointPosition.y);
      ctx.lineWidth = this.lineWidth;
      ctx.strokeStyle = this.lineColor;
      ctx.stroke();
    }
  }

  resize(canvas, ctx) {
    this.plotPoints();
    this.curve.resize(canvas, ctx, this.points);
  }

  draw(canvas, ctx) {
    if (this.drawPoints) this.pointObjects.forEach(point => point.draw(canvas, ctx));
    if (this.drawCurve) this.curve.draw(canvas, ctx);
    if (this.drawLines) this.drawStraightLines(canvas, ctx);
  }
}
