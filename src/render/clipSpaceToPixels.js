export default (canvas, clipSpace, offset = [0, 0]) => {
  return {
    x : (canvas.width / 2) + ((clipSpace.x / 2) * canvas.width) + offset[0],
    y : (canvas.height / 2) + ((clipSpace.y / 2) * canvas.height) + offset[1],
  };
}
