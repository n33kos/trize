import clipSpaceToPixels from '../render/clipSpaceToPixels';
import degToRad          from '../math/degToRad';
import distance          from '../math/distance';
import lawOfCosines      from '../math/lawOfCosines';
import radToDeg          from '../math/radToDeg';

export default class {
  constructor(geometry = null, canvas) {
    this.canvas = canvas;
    this.geometry = geometry;
    if (!geometry) {
      this.geometry = [
      	{ x: 0,     y: -0.75, color: 'black', width: 2,},
      	{ x: -0.75, y: 0.25,  color: 'black', width: 2,},
      	{ x: 0.75,  y: 0.25,  color: 'black', width: 2,},
      ];
    }
  }

  getSideCenterPoint(a, b) {
    return {
      x : a.x + (b.x - a.x) * 0.5,
      y : a.y + (b.y - a.y) * 0.5,
    };
  }

  getSideLengths() {
    return {
      AB : distance(
        clipSpaceToPixels(this.canvas, this.geometry[0]),
        clipSpaceToPixels(this.canvas, this.geometry[1]),
      ),
      BC : distance(
        clipSpaceToPixels(this.canvas, this.geometry[1]),
        clipSpaceToPixels(this.canvas, this.geometry[2]),
      ),
      AC : distance(
        clipSpaceToPixels(this.canvas, this.geometry[0]),
        clipSpaceToPixels(this.canvas, this.geometry[2]),
      ),
    };
  }

  getAngles() {
    const sides = this.getSideLengths();
    let A = sides.BC;
    let B = sides.AB;
    let C = sides.AC;

    return {
      A : radToDeg(lawOfCosines(A, B, C)),
      B : radToDeg(lawOfCosines(C, A, B)),
      C : radToDeg(lawOfCosines(B, A, C)),
    };
  }

  drawArc(ctx, triangleIndex, color) {
    const arcVert = clipSpaceToPixels(this.canvas, this.geometry[triangleIndex]);
    const angles = this.getAngles();

    let offset = 45;
    let startDegree = 0;
    let endDegree = angles.A;

    if (triangleIndex === 1) {
      offset = 0;
      endDegree = -angles.B;
    }

    if (triangleIndex === 2) {
      offset = 180;
      endDegree = angles.C;
    }

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.arc(
      arcVert.x,
      arcVert.y,
      30,
      degToRad(offset - startDegree),
      degToRad(offset + endDegree),
      triangleIndex === 1
    );
    ctx.stroke();
  }

  draw(ctx) {
    for (let i = 0; i < this.geometry.length; i++) {
      const vert = clipSpaceToPixels(this.canvas, this.geometry[i]);
      let nextVert = clipSpaceToPixels(this.canvas, this.geometry[0]);
      if (i < 2) nextVert = clipSpaceToPixels(this.canvas, this.geometry[i + 1]);

      ctx.lineCap = 'round';
      ctx.strokeStyle = this.geometry[i].color;
      ctx.beginPath();
      ctx.lineWidth = this.geometry[i].width;
      ctx.moveTo(vert.x, vert.y);
      ctx.lineTo(nextVert.x, nextVert.y);
      ctx.stroke();
    }
  }

}
