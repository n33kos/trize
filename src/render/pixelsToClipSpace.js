import Vector2 from '../math/vector2';

export default (canvas, pixelSpacePosition) => {
  return new Vector2(
    ((pixelSpacePosition.x / canvas.width) / 2) + (canvas.width / 2),
    ((pixelSpacePosition.y / canvas.width) / 2) + (canvas.width / 2),
  );
}
