/**
 * A class to draw a Line
 * @class Line
 * @param {Object} config - configuration object
 * @param {Vector2} config.lineCount - Number of lines per quadrant
 * @param {string} config.color - Color of the lines
 * @param {string} config.originColor - Color of the origin lines
 * @param {int} config.width - width of the lines
 * @param {int} config.originLineWidth - width of the origin lines
 */

import clipSpaceToPixels from '../render/clipSpaceToPixels';
import Line              from '../geometry/line';
import Vector2           from '../math/vector2';

export default class {
  constructor({
    color = 'rgba(0, 0, 0, 0.3)',
    lineCount = new Vector2(),
    originColor = 'rgba(0, 0, 0, 1)',
    originLineWidth = 1,
    width = 1,
  }) {
    this.color = color;
    this.lineCount = lineCount;
    this.originColor = originColor;
    this.originLineWidth = originLineWidth;
    this.width = width;

    this.initLines();
  }

  initLines() {
    // Start with the origin lines
    this.lines = [
      new trize.Line({
        color : this.originColor,
        end   : new Vector2(1, 0),
        start : new Vector2(-1, 0),
        width : this.originLineWidth,
      }),
      new trize.Line({
        color : this.originColor,
        end   : new Vector2(0, 1),
        start : new Vector2(0, -1),
        width : this.originLineWidth,
      }),
    ];

    // Add horizontal lines
    for (var i = 1; i < this.lineCount.x; i++) {
      this.lines.push(
        new trize.Line({
          color : this.color,
          end   : new Vector2(1, (1 / this.lineCount.y) * i),
          start : new Vector2(-1, (1 / this.lineCount.y) * i),
          width : this.width,
        })
      );
      this.lines.push(
        new trize.Line({
          color : this.color,
          end   : new Vector2(1, (1 / this.lineCount.y) * -i),
          start : new Vector2(-1, (1 / this.lineCount.y) * -i),
          width : this.width,
        })
      );
    }

    // Add vetical lines
    for (var i = 1; i < this.lineCount.y; i++) {
      this.lines.push(
        new trize.Line({
          color : this.color,
          end   : new Vector2((1 / this.lineCount.x) * i, 1),
          start : new Vector2((1 / this.lineCount.x) * i, -1),
          width : this.width,
        })
      );
      this.lines.push(
        new trize.Line({
          color : this.color,
          end   : new Vector2((1 / this.lineCount.x) * -i, 1),
          start : new Vector2((1 / this.lineCount.x) * -i, -1),
          width : this.width,
        })
      );
    }
  }

  draw(canvas, ctx) {
    this.lines.forEach(line => line.draw(canvas, ctx));
  }
}
