import Vector2           from '../math/vector2';
import clipSpaceToPixels from '../render/clipSpaceToPixels';

export default class {
  constructor({
    fillStyle = '#000000',
    font = '16px sans-serif',
    offset = new Vector2(),
    position = new Vector2(),
    rotation = 0,
    strokeStyle = '#000000',
    text = 'Hello World',
    textAlign = 'center',
    shouldStroke = false,
    shouldFill = true,
  }) {
    this.fillStyle = fillStyle;
    this.font = font;
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

    ctx.font = this.font;
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
