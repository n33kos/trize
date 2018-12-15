/**
 * A function to return the distance between two points
 * @function distance
 * @param {number} distance
 */

export default (a, b) => {
  const X = a.x - b.x;
  const Y = a.y - b.y;
  return Math.sqrt(X*X + Y*Y);
}
