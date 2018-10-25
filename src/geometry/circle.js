import Vector2           from '../math/vector2';
import clipSpaceToPixels from '../render/clipSpaceToPixels';

export default class {
  constructor({
    arcEnd = Math.PI * 2,
    arcStart = 0,
    fillStyle = '#000000',
    position = new Vector2(0, 0),
    radius = 100,
    shouldFill = true,
    shouldStroke = false,
    strokeStyle = '#000000',
  }) {
    this.arcEnd = arcEnd;
    this.arcStart = arcStart;
    this.fillStyle = fillStyle;
    this.position = position;
    this.radius = radius;
    this.shouldFill = shouldFill;
    this.shouldStroke = shouldStroke;
    this.strokeStyle = strokeStyle;
  }

  draw(canvas, ctx) {
    const screenPos = clipSpaceToPixels(canvas, this.position);

    if (this.shouldFill) {
      ctx.fillStyle = this.fillStyle;

      ctx.beginPath();
      ctx.arc(
        screenPos.x,
        screenPos.y,
        this.radius,
        this.arcStart,
        this.arcEnd,
      );
      ctx.fill();
    }

    if (this.shouldStroke) {
      ctx.strokeStyle = this.strokeStyle;

      ctx.beginPath();
      ctx.arc(
        screenPos.x,
        screenPos.y,
        this.radius,
        this.arcStart,
        this.arcEnd,
      );
      ctx.stroke();
    }
  }
}
