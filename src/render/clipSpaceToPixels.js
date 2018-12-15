/**
 * A function to convert a clip space position to pixel space
 * @function clipSpaceToPixels
 * @param {element} canvas
 * @param {Vector2} clipSpacePosition
 */

import Vector2 from '../math/vector2';

export default (canvas, clipSpacePosition) => {
  return new Vector2(
    (canvas.width / 2) + (clipSpacePosition.x * (canvas.width / 2)),
    (canvas.height / 2) + -(clipSpacePosition.y * (canvas.height / 2)),
  );
}
