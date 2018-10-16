export default class {
  constructor(position = new Vector2(), text = 'test', font = '30px Arial'){
    this.font = font;
    this.position = position;
    this.text = text;
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.fillText(this.text, this.position.x, this.position.y);
  }
}
