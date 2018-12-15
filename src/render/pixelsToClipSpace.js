/**
 * A function to convert a pixel space position to clip space
 * @function pixelsToClipSpace
 * @param {element} canvas
 * @param {Vector2} pixelSpacePosition
 */

import Vector2 from '../math/vector2';

export default (canvas, pixelSpacePosition) => {
  return new Vector2(
    (pixelSpacePosition.x / canvas.width)  *  2 - 1,
    (pixelSpacePosition.y / canvas.height) * -2 + 1,
  );
}
