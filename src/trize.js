/**
 * A library for drawing and manipulating Canvas2D triangles
 * @module trize
 */

// ---- Classes ----
import Label    from './render/label';
import Point    from './geometry/point';
import Renderer from './render/renderer';
import Triangle from './geometry/triangle';
import Vector2  from './math/vector2';

// ---- Functions ----
import clipSpaceToPixels from './render/clipSpaceToPixels';
import degToRad          from './math/degToRad';
import distance          from './math/distance';
import lawOfCosines      from './math/lawOfCosines';
import radToDeg          from './math/radToDeg';
import round             from './math/round';

const trize = {
  // ---- Classes ----
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
  radToDeg,
  round,
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
  module.exports = trize;
} else {
  window.trize = trize;
}
