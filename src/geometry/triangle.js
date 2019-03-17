/**
 * A class to draw a triangle
 * @class Triangle
 * @param {Array} [Point, Point, Point] - Array of Point objects which make up the triangle.
 *
 * @param {Vector2} geometry[0].position - Position of the triangle's point
 *
 * @param {Object} geometry[0].arc - Configuration object for an arc on this point of the triangle
 * @param {string} geometry[0].arc.color - Color of the arc
 * @param {Label} geometry[0].arc.label - Label for the arc
 * @param {number} geometry[0].arc.radius - Radius or arc in pixels from point
 * @param {number} geometry[0].arc.width - Width of the arc
 *
 * @param {Object} geometry[0].side - Configuration object for the side starting with this point of the triangle
 * @param {Label} geometry[0].side.label - Label for the side
 * @param {string} geometry[0].side.color - Color of the side
 * @param {number} geometry[0].side.width - Width of the side
 *
 * @param {Object} geometry[0].vertex - Configuration object for the vertex of this point
 * @param {Label} geometry[0].vertex.label - Label for the vertex
 * @param {string} geometry[0].vertex.color - Color of the vertex
 * @param {number} geometry[0].vertex.width - Width of the vertex
 *
 */

import clipSpaceToPixels from '../render/clipSpaceToPixels';
import degToRad          from '../math/degToRad';
import distance          from '../math/distance';
import getPixelDensity   from '../render/getPixelDensity';
import lawOfCosines      from '../math/lawOfCosines';
import pixelsToClipSpace from '../render/pixelsToClipSpace';
import Point             from './point';
import pointOnCircle     from '../math/pointOnCircle';
import radToDeg          from '../math/radToDeg';
import sideCenterPoint   from '../math/sideCenterPoint';
import Vector2           from '../math/vector2';

export default class {
  constructor(geometry = null) {
    this.geometry = geometry;
    if (!geometry) {
      this.geometry = [
        new Point({ position : new Vector2(0, -0.75) }),
        new Point({ position : new Vector2(-0.75, 0.25) }),
        new Point({ position : new Vector2(0.75, 0.25) }),
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
    ctx.lineWidth = point.arc.width;
    ctx.strokeStyle = point.arc.color;
    ctx.arc(
      screenPos.x,
      screenPos.y,
      point.arc.radius * getPixelDensity(),
      offset.start,
      offset.end,
    );
    ctx.stroke();

    if (point.arc.label) {
      point.arc.label.position = pixelsToClipSpace(
        canvas,
        pointOnCircle(
          offset.start + angle / 2,
          screenPos,
          point.arc.radius,
        ),
      );
      point.arc.label.draw(canvas, ctx);
    }
  }

  drawLine(canvas, ctx, point, nextPoint) {
    const screenPos = clipSpaceToPixels(canvas, point.position);
    const nextScreenPos = clipSpaceToPixels(canvas, nextPoint.position);

    ctx.lineCap = 'round';
    ctx.strokeStyle = point.side.color;
    ctx.beginPath();
    ctx.lineWidth = point.side.width;
    ctx.moveTo(screenPos.x, screenPos.y);
    ctx.lineTo(nextScreenPos.x, nextScreenPos.y);
    ctx.stroke();

    if (point.side.label) {
      point.side.label.position = sideCenterPoint(point.position, nextPoint.position);
      point.side.label.draw(canvas, ctx);
    }
  }

  drawVertex(canvas, ctx, point) {
    const screenPos = clipSpaceToPixels(canvas, point.position);

    ctx.fillStyle = point.vertex.color;
    ctx.beginPath();
    ctx.arc(
      screenPos.x,
      screenPos.y,
      point.vertex.width,
      0,
      Math.PI * 2,
    );
    ctx.fill();

    if (point.vertex.label) {
      point.vertex.label.position = point.position.clone();
      point.vertex.label.draw(canvas, ctx);
    }
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

      if (point.arc.width > 0) this.drawArc(canvas, ctx, point, this.angles[i], this.arcBoundaries[i]);
      if (point.side.width > 0) this.drawLine(canvas, ctx, point, nextPoint);
      if (point.vertex.width > 0) this.drawVertex(canvas, ctx, point);
    }
  }
}
