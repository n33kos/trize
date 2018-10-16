export default (a, b) => {
  const X = a.x - b.x;
  const Y = a.y - b.y;
  return Math.sqrt(X*X + Y*Y);
}
