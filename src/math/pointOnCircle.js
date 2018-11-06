import Vector2 from './vector2';

export default (angle, center, radius) => new Vector2(
  center.x + radius * Math.cos(angle),
  center.y + radius * Math.sin(angle),
);
