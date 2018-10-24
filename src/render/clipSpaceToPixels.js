import Vector2 from '../math/vector2';

export default (canvas, clipSpacePosition) => {
  return new Vector2(
    (canvas.width / 2) + ((clipSpacePosition.x / 2) * canvas.width),
    (canvas.height / 2) + ((clipSpacePosition.y / 2) * canvas.height),
  );
}
