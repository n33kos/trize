/**
 * A class to draw a graph
 * @class Graph
 * @param {Object} config - configuration object
 * @param {int} config.size - Size of each grid square in pixels
 * @param {string} config.color - Color of the lines
 * @param {string} config.originColor - Color of the origin lines
 * @param {int} config.width - width of the lines
 * @param {int} config.originLineWidth - width of the origin lines
 */

import pixelsToClipSpace from '../render/pixelsToClipSpace';
import Line              from '../geometry/line';
import Vector2           from '../math/vector2';
import getPixelDensity   from '../render/getPixelDensity';

export default class {
  constructor({
    color = 'rgba(0, 0, 0, 0.3)',
    originColor = 'rgba(0, 0, 0, 1)',
    originLineWidth = 1,
    size = 50,
    width = 1,
    canvas,
  }) {
    this.color = color;
    this.originColor = originColor;
    this.originLineWidth = originLineWidth;
    this.size = size;
    this.width = width;
    this.canvas = canvas;

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

    this.clipSpaceSize = new Vector2(
      (this.size / this.canvas.width) * getPixelDensity(),
      (this.size / this.canvas.height) * getPixelDensity(),
    );

    const horizontalLines = Math.ceil(this.canvas.height / this.size);

    for (let i = 1; i < horizontalLines / 2; i++) {
      this.lines.push(
        new trize.Line({
          color : this.color,
          end   : new Vector2(1, i * this.clipSpaceSize.y),
          start : new Vector2(-1, i * this.clipSpaceSize.y),
          width : this.width,
        }),
        new trize.Line({
          color : this.color,
          end   : new Vector2(1, -i * this.clipSpaceSize.y),
          start : new Vector2(-1, -i * this.clipSpaceSize.y),
          width : this.width,
        }),
      );
    }

    const verticalLines = Math.ceil(this.canvas.width / this.size);

    for (let i = 1; i < verticalLines / 2; i++) {
      this.lines.push(
        new trize.Line({
          color : this.color,
          end   : new Vector2(i * this.clipSpaceSize.x, 1),
          start : new Vector2(i * this.clipSpaceSize.x, -1),
          width : this.width,
        }),
        new trize.Line({
          color : this.color,
          end   : new Vector2(-i * this.clipSpaceSize.x, 1),
          start : new Vector2(-i * this.clipSpaceSize.x, -1),
          width : this.width,
        }),
      );
    }
  }

  resize(canvas, ctx) {
    this.initLines();
  }

  draw(canvas, ctx) {
    this.lines.forEach(line => line.draw(canvas, ctx));
  }
}
