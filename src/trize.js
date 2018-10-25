/**
 * A library for drawing and manipulating Canvas2D triangles
 * @module trize
 */

// ---- Classes ----
import Circle   from './geometry/circle';
import Label    from './interface/label';
import Point    from './geometry/point';
import Renderer from './render/renderer';
import Triangle from './geometry/triangle';
import Vector2  from './math/vector2';

// ---- Functions ----
import clipSpaceToPixels from './render/clipSpaceToPixels';
import degToRad          from './math/degToRad';
import distance          from './math/distance';
import lawOfCosines      from './math/lawOfCosines';
import pixelsToClipSpace from './render/pixelsToClipSpace';
import radToDeg          from './math/radToDeg';
import round             from './math/round';

const trize = {
  // ---- Classes ----
  Circle,
  Label,
  Point,
  Renderer,
  Triangle,
  Vector2,

  // ---- Functions ----
  clipSpaceToPixels,
  degToRad,
  distance,
  lawOfCosines,
  pixelsToClipSpace,
  radToDeg,
  round,
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = trize;
} else {
  window.trize = trize;
}
