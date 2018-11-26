/**
 * A library for drawing and manipulating Canvas2D triangles
 * @module trize
 */

// ---- Classes ----
import Circle   from './geometry/circle';
import Label    from './text/label';
import Line     from './geometry/line';
import Point    from './geometry/point';
import Renderer from './render/renderer';
import Scene    from './render/scene';
import Triangle from './geometry/triangle';
import Vector2  from './math/vector2';
import Vertex   from './geometry/vertex';

// ---- Functions ----
import clipSpaceToPixels from './render/clipSpaceToPixels';
import degToRad          from './math/degToRad';
import distance          from './math/distance';
import lawOfCosines      from './math/lawOfCosines';
import pixelsToClipSpace from './render/pixelsToClipSpace';
import pointOnCircle     from './math/pointOnCircle';
import radToDeg          from './math/radToDeg';
import round             from './math/round';
import sideCenterPoint   from './math/sideCenterPoint';

const trize = {
  // ---- Classes ----
  Circle,
  Label,
  Line,
  Point,
  Renderer,
  Scene,
  Triangle,
  Vector2,
  Vertex,

  // ---- Functions ----
  clipSpaceToPixels,
  degToRad,
  distance,
  lawOfCosines,
  pixelsToClipSpace,
  pointOnCircle,
  radToDeg,
  round,
  sideCenterPoint,
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = trize;
} else {
  window.trize = trize;
}
