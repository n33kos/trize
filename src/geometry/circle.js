import clipSpaceToPixels from '../render/clipSpaceToPixels';
import distance          from '../math/distance';
import Vector2           from '../math/vector2';

export default class {
  constructor({
    arcEnd = Math.PI * 2,
    arcStart = 0,
    fillStyle = '#000000',
    position = new Vector2(0, 0),
    radius = null,
    clipRadius = null,
    shouldFill = true,
    shouldStroke = false,
    strokeStyle = '#000000',
    strokeWidth = 1,
  }) {
    this.arcEnd = arcEnd;
    this.arcStart = arcStart;
    this.clipRadius = clipRadius;
    this.fillStyle = fillStyle;
    this.position = position;
    this.radius = radius;
    this.shouldFill = shouldFill;
    this.shouldStroke = shouldStroke;
    this.strokeStyle = strokeStyle;
    this.strokeWidth = strokeWidth;
  }

  getPixelRadiusFromClipRadius(canvas) {
    return distance(
      clipSpaceToPixels(canvas, new Vector2(0, 0)),
      clipSpaceToPixels(canvas, new Vector2(this.clipRadius, 0)),
    );
  }

  draw(canvas, ctx) {
    const screenPos = clipSpaceToPixels(canvas, this.position);

    let radius = this.radius;
    if (!this.radius) radius = this.getPixelRadiusFromClipRadius(canvas);

    if (this.shouldFill) {
      ctx.fillStyle = this.fillStyle;

      ctx.beginPath();
      ctx.arc(
        screenPos.x,
        screenPos.y,
        radius,
        this.arcStart,
        this.arcEnd,
      );
      ctx.fill();
    }

    if (this.shouldStroke) {
      ctx.strokeStyle = this.strokeStyle;
      ctx.lineWidth = this.strokeWidth;

      ctx.beginPath();
      ctx.arc(
        screenPos.x,
        screenPos.y,
        radius,
        this.arcStart,
        this.arcEnd,
      );
      ctx.stroke();
    }
  }
}
