import clipSpaceToPixels from '../render/clipSpaceToPixels';
import Vector2           from '../math/vector2';

export default class {
  constructor({
    color = 'black',
    position = new Vector2(),
    width = 1,
  }) {
    this.color = color;
    this.position = position;
    this.width = width;
  }

  draw(canvas, ctx) {
    const screenPos = clipSpaceToPixels(canvas, this.position);

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      screenPos.x,
      screenPos.y,
      this.width,
      0,
      Math.PI * 2,
    );
    ctx.fill();
  }
}
