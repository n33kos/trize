import clipSpaceToPixels from '../render/clipSpaceToPixels';
import degToRad          from '../math/degToRad';
import distance          from '../math/distance';
import lawOfCosines      from '../math/lawOfCosines';
import Point             from './point';
import radToDeg          from '../math/radToDeg';
import Vector2           from '../math/vector2';

export default class {
  constructor(geometry = null) {
    this.geometry = geometry;
    if (!geometry) {
      // Fallback geometry
      this.geometry = [
        new Point({
          drawArc  : true,
          position : new Vector2(0, -0.75),
        }),
        new Point({
          drawArc  : true,
          position : new Vector2(-0.75, 0.25),
        }),
        new Point({
          drawArc  : true,
          position : new Vector2(0.75, 0.25),
        }),
      ];
    }
    this.sides = null;
    this.angles = null;
    this.arcBoundaries = null;
  }

  getSideCenterPoint(a, b) {
    return {
      x : a.x + (b.x - a.x) * 0.5,
      y : a.y + (b.y - a.y) * 0.5,
    };
  }

  getSideLengths(canvas, geometry) {
    return [
      distance(
        clipSpaceToPixels(canvas, geometry[0].position),
        clipSpaceToPixels(canvas, geometry[1].position),
      ),
      distance(
        clipSpaceToPixels(canvas, geometry[1].position),
        clipSpaceToPixels(canvas, geometry[2].position),
      ),
      distance(
        clipSpaceToPixels(canvas, geometry[2].position),
        clipSpaceToPixels(canvas, geometry[0].position),
      ),
    ];
  }

  getAngles(sides) {
    return [
      lawOfCosines(sides[2], sides[0], sides[1]),
      lawOfCosines(sides[0], sides[1], sides[2]),
      lawOfCosines(sides[1], sides[2], sides[0]),
    ];
  }

  getArcBoundaries(canvas) {
    let arcs = [];
    this.geometry.forEach((point, i) => {
      // Get the next point
      let nextPoint = this.geometry[0]
      if (i < (this.geometry.length - 1)) nextPoint = this.geometry[i + 1];

      // Get the prev point
      let prevPoint = this.geometry[this.geometry.length - 1];
      if (i > 0) prevPoint = this.geometry[i - 1];

      // Convert clipspace to pixel space
      const pointPixelSpace = clipSpaceToPixels(canvas, point.position);
      const nextPointPixelSpace = clipSpaceToPixels(canvas, nextPoint.position);
      const prevPointPixelSpace = clipSpaceToPixels(canvas, prevPoint.position);

      // get diffs from the other points to the current point
      const prevDiffX = prevPointPixelSpace.x - pointPixelSpace.x;
      const prevDiffY = prevPointPixelSpace.y - pointPixelSpace.y;
      const nextDiffX = nextPointPixelSpace.x - pointPixelSpace.x;
      const nextDiffY = nextPointPixelSpace.y - pointPixelSpace.y;

      let start = Math.atan2(prevDiffY, prevDiffX);
      let end = Math.atan2(nextDiffY, nextDiffX);

      // Use cross product to find correct direction, swap angles if needed
      if(prevDiffX * nextDiffY - prevDiffY * nextDiffX < 0) {
        const t = end;
        end = start;
        start = t;
      }

      // If the start position is behind the end, move ahead by adding a full circle
      if(start < end) start += Math.PI * 2;

      // Push the offset onto the array
      arcs.push({ start, end });
    });

    return arcs;
  }

  drawArc(canvas, ctx, point, angle, offset) {
    const screenPos = clipSpaceToPixels(canvas, point.position);

    ctx.beginPath();
    ctx.lineWidth = point.width;
    ctx.strokeStyle = point.color;
    ctx.arc(
      screenPos.x,
      screenPos.y,
      point.arcRadius,
      offset.start, // start at - offset
      offset.end, // negative values because counter clockwise doesn't invert the values for this function -_-
    );
    ctx.stroke();
  }

  drawLine(canvas, ctx, point, nextPoint) {
    const screenPos = clipSpaceToPixels(canvas, point.position);
    const nextScreenPos = clipSpaceToPixels(canvas, nextPoint.position);

    ctx.lineCap = 'round';
    ctx.strokeStyle = point.color;
    ctx.beginPath();
    ctx.lineWidth = point.width;
    ctx.moveTo(screenPos.x, screenPos.y);
    ctx.lineTo(nextScreenPos.x, nextScreenPos.y);
    ctx.stroke();
  }

  draw(canvas, ctx) {
    this.sides = this.getSideLengths(canvas, this.geometry);
    this.angles = this.getAngles(this.sides);
    this.arcBoundaries = this.getArcBoundaries(canvas);

    for (let i = 0; i < this.geometry.length; i++) {
      const point = this.geometry[i];

      let nextPoint = this.geometry[0];
      if (i < (this.geometry.length - 1)) {
        nextPoint = this.geometry[i + 1];
      }

      if (point.drawArc) this.drawArc(canvas, ctx, point, this.angles[i], this.arcBoundaries[i]);
      this.drawLine(canvas, ctx, point, nextPoint);
    }
  }

}
