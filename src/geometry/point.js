import Vector2 from '../math/vector2';

export default class {
  constructor({
    arc = {
      color: 'black',
      width: 0,
      radius : 30,
    },
    side = {
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
    this.side = side;
    this.vertex = vertex;
    this.position = position;
  }
}
