import Vector2 from '../math/vector2';
import clipSpaceToPixels from '../render/clipSpaceToPixels';

export default class {
  constructor({
    fillStyle = '#000000',
    font = '16px sans-serif',
    position = new Vector2(0, 0),
    strokeStyle = '#000000',
    text = 'Hello World',
    textAlign = 'center',
    shouldStroke = false,
    shouldFill = true,
  }) {
    this.fillStyle = fillStyle;
    this.font = font;
    this.position = position;
    this.shouldFill = shouldFill;
    this.shouldStroke = shouldStroke;
    this.strokeStyle = strokeStyle;
    this.text = text;
    this.textAlign = textAlign;
  }

  draw(canvas, ctx) {
    const screenPos = clipSpaceToPixels(canvas, this.position);
    ctx.font = this.font;
    ctx.textAlign = this.textAlign;

    if (this.shouldFill) {
      ctx.fillStyle = this.fillStyle;
      ctx.fillText(
        this.text,
        screenPos.x,
        screenPos.y,
      );
    }

    if (this.shouldStroke) {
      ctx.strokeStyle = this.strokeStyle;
      ctx.strokeText(
        this.text,
        screenPos.x,
        screenPos.y,
      );
    }
  }
}
