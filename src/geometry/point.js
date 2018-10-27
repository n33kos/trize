import Vector2 from '../math/vector2';

export default class {
  constructor({
    arc = {
      color: 'black',
      width: 0,
      radius : 30,
    },
    line = {
      color: 'black',
      width: 1,
    },
    vertex = {
      color: 'black',
      width: 0,
    },
    position = new Vector2(),
  }) {
    this.arc = arc;
    this.line = line;
    this.vertex = vertex;
    this.position = position;
  }
}
