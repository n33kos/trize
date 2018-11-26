export default class {
  constructor(element, scene) {
    const canvas = document.getElementById(element);
    const ctx = canvas.getContext('2d');
    const pixelDensity = window.devicePixelRatio;
    canvas.width = canvas.offsetWidth * pixelDensity;
    canvas.height = canvas.offsetHeight * pixelDensity;
    this.canvas = canvas;
    this.ctx = ctx;
    this.cx = ctx.canvas.width/2;
    this.cy = ctx.canvas.height/2;
    this.pixelDensity = pixelDensity;
    this.scene = scene;
  }

  resizeCanvas() {
  	this.canvas.width = this.canvas.offsetWidth * this.pixelDensity;
  	this.canvas.height = this.canvas.offsetHeight * this.pixelDensity;
  	this.cx = this.ctx.canvas.width / 2;
  	this.cy = this.ctx.canvas.height / 2;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  render() {
    this.clear();
    this.scene.objects.forEach(object => {
      object.draw(this.canvas, this.ctx);
    })
  }
}
