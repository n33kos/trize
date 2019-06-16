/**
 * A class to draw a function on a graph
 * @class Line
 * @param {Object} config - configuration object
 */

import clipSpaceToPixels from '../render/clipSpaceToPixels';
import Vector2           from '../math/vector2';
import Vertex            from '../geometry/vertex';

export default class {
  constructor({
    canvas,
    condition = (i) => i < 10,
    drawCurves = true,
    drawLines = false,
    drawPoints = true,
    func = (n) => new Vector2(n + 1, n + 1),
    graph,
    incrementExpression = (i) => i + 1,
    initialValue = 0,
    lineColor = 'black',
    pointColor = 'black',
    pointWidth = 4,
  }) {
    this.canvas = canvas;
    this.condition = condition;
    this.drawCurves = drawCurves;
    this.drawLines = drawLines,
    this.drawPoints = drawPoints;
    this.func = func;
    this.graph = graph;
    this.incrementExpression = incrementExpression;
    this.initialValue = initialValue;
    this.lineColor = lineColor;
    this.pointColor = pointColor;
    this.pointWidth = pointWidth;

    this.plotPoints();
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

  drawQuadraticCurves(canvas, ctx) {
    const initialPosition = clipSpaceToPixels(canvas, this.points[0]);
    ctx.moveTo(initialPosition.x, initialPosition.y);

    ctx.beginPath();
    for(let i = 0; i < this.points.length - 1; i++) {
      const pointPosition = clipSpaceToPixels(canvas, this.points[i]);
      const nextPointPosition = clipSpaceToPixels(canvas, this.points[i + 1]);

      const x_mid = (pointPosition.x + nextPointPosition.x) / 2;
      const y_mid = (pointPosition.y + nextPointPosition.y) / 2;
      const cp_x1 = (x_mid + pointPosition.x) / 2;
      const cp_x2 = (x_mid + nextPointPosition.x) / 2;

      ctx.quadraticCurveTo(cp_x1, pointPosition.y, x_mid, y_mid);
      ctx.quadraticCurveTo(cp_x2, nextPointPosition.y, nextPointPosition.x, nextPointPosition.y);
      ctx.strokeStyle = this.lineColor;
      ctx.stroke();
    }
  }

  drawStraightLines(canvas, ctx) {
    const initialPosition = clipSpaceToPixels(canvas, this.points[0]);
    ctx.moveTo(initialPosition.x, initialPosition.y);

    ctx.beginPath();
    for(let i = 0; i < this.points.length; i++) {
      const pointPosition = clipSpaceToPixels(canvas, this.points[i]);
      ctx.lineTo(pointPosition.x, pointPosition.y);
      ctx.strokeStyle = this.lineColor;
      ctx.stroke();
    }
  }

  resize(canvas, ctx) {
    this.plotPoints();
  }

  draw(canvas, ctx) {
    if (this.drawPoints) this.pointObjects.forEach(point => point.draw(canvas, ctx));
    if (this.drawCurves) this.drawQuadraticCurves(canvas, ctx);
    if (this.drawLines) this.drawStraightLines(canvas, ctx);
  }
}
