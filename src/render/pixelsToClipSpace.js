import Vector2 from '../math/vector2';

// THIS IS SO NOT TESTED! MAKE SURE IT WORKS BEFORE MERGING
export default (canvas, pixelSpacePosition) => {
  return new Vector2(
    ((pixelSpacePosition.x / canvas.width) * 2) - (canvas.width / 2),
    ((pixelSpacePosition.y / canvas.width) * 2) - (canvas.width / 2),
  );
}
