/**
 * A class to represent a label in the scene
 * @class Label
 *
 * @param {string} fillStyle - Fill style for the label text
 * @param {string} font - Font for the label
 * @param {Vector2} offset - Offset from the label's position (in pixels)
 * @param {Vector2} position - Position of the label
 * @param {number} rotation - Rotation of the label
 * @param {string} strokeStyle - Stroke style for the label text
 * @param {string} text - Content of the label to display
 * @param {string} textAlign - Text alignment for the label
 * @param {boolean} shouldStroke - Should the label draw a stroke
 * @param {boolean} shouldFill - Should the label draw a fill
 */

import clipSpaceToPixels from '../render/clipSpaceToPixels';
import getPixelDensity   from '../render/getPixelDensity';
import Vector2           from '../math/vector2';

export default class {
  constructor({
    fillStyle = '#000000',
    font = 'sans-serif',
    fontSize = '16',
    fontSizeType = 'px',
    offset = new Vector2(),
    position = new Vector2(),
    rotation = 0,
    shouldFill = true,
    shouldStroke = false,
    strokeStyle = '#000000',
    text = 'Hello World',
    textAlign = 'center',
  }) {
    this.fillStyle = fillStyle;
    this.font = font;
    this.fontSize = fontSize * getPixelDensity();
    this.fontSizeType = fontSizeType;
    this.offset = offset;
    this.position = position;
    this.rotation = rotation;
    this.shouldFill = shouldFill;
    this.shouldStroke = shouldStroke;
    this.strokeStyle = strokeStyle;
    this.text = text;
    this.textAlign = textAlign;
  }

  draw(canvas, ctx) {
    const screenPos = clipSpaceToPixels(canvas, this.position);
    const drawPos = new Vector2(
      screenPos.x + this.offset.x,
      screenPos.y + this.offset.y,
    );

    ctx.font = `${this.fontSize}${this.fontSizeType} ${this.font}`;
    ctx.textAlign = this.textAlign;

    // Move canvas to position and rotate
    ctx.translate(drawPos.x, drawPos.y);
    ctx.rotate(this.rotation);

    if (this.shouldFill) {
      ctx.fillStyle = this.fillStyle;
      ctx.fillText(this.text, 0, 0);
    }

    if (this.shouldStroke) {
      ctx.strokeStyle = this.strokeStyle;
      ctx.strokeText(this.text, 0, 0);
    }

    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
}
