export default class {
  constructor(element) {
    const canvas = document.getElementById(element);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.canvas = canvas;
    this.ctx = ctx;
    this.cx = ctx.canvas.width/2;
    this.cy = ctx.canvas.height/2;
    this.scene = [];
  }

  resizeCanvas() {
  	this.canvas.width = window.innerWidth;
  	this.canvas.height = window.innerHeight;
  	this.cx = this.ctx.canvas.width / 2;
  	this.cy = this.ctx.canvas.height / 2;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  add(object) {
    this.scene.push(object);
  }

  render() {
    this.clear();
    this.scene.forEach(object => {
      object.draw(this.canvas, this.ctx);
    })
  }
}
