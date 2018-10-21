import Vector2 from '../math/vector2';

export default class {
  constructor({
    arcRadius = 30,
    color = 'black',
    drawArc = false,
    position = new Vector2(),
    width = 2,
  }) {
    this.arcRadius = arcRadius;
    this.color = color;
    this.drawArc = drawArc;
    this.position = position;
    this.width = width;
  }
}
