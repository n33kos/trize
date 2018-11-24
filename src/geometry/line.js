import clipSpaceToPixels from '../render/clipSpaceToPixels';
import Vector2           from '../math/vector2';

export default class {
  constructor({
    color = 'black',
    end = new Vector2(),
    start = new Vector2(),
    width = 1,
  }) {
    this.color = color;
    this.end = end;
    this.start = start;
    this.width = width;
  }

  draw(canvas, ctx) {
    const startScreenPos = clipSpaceToPixels(canvas, this.start);
    const endScreenPos = clipSpaceToPixels(canvas, this.end);

    ctx.lineCap = 'round';
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.lineWidth = this.width;
    ctx.moveTo(startScreenPos.x, startScreenPos.y);
    ctx.lineTo(endScreenPos.x, endScreenPos.y);
    ctx.stroke();
  }
}
