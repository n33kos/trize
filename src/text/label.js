import Vector2           from '../math/vector2';
import clipSpaceToPixels from '../render/clipSpaceToPixels';

export default class {
  constructor({
    fillStyle = '#000000',
    font = '16px sans-serif',
    offset = new Vector2(),
    position = new Vector2(),
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
    this.shouldFill = shouldFill;
    this.shouldStroke = shouldStroke;
    this.strokeStyle = strokeStyle;
    this.text = text;
    this.textAlign = textAlign;
    // TODO: Add rotation
  }

  draw(canvas, ctx) {
    const screenPos = clipSpaceToPixels(canvas, this.position);

    ctx.font = this.font;
    ctx.textAlign = this.textAlign;

    if (this.shouldFill) {
      ctx.fillStyle = this.fillStyle;
      ctx.fillText(
        this.text,
        screenPos.x + this.offset.x,
        screenPos.y + this.offset.y,
      );
    }

    if (this.shouldStroke) {
      ctx.strokeStyle = this.strokeStyle;
      ctx.strokeText(
        this.text,
        screenPos.x + this.offset.x,
        screenPos.y + this.offset.y,
      );
    }
  }
}
