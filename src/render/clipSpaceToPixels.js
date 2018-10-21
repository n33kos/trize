export default (canvas, clipSpacePosition) => {
  return {
    x : (canvas.width / 2) + ((clipSpacePosition.x / 2) * canvas.width),
    y : (canvas.height / 2) + ((clipSpacePosition.y / 2) * canvas.height),
  };
}
