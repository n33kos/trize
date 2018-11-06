export default class {
  constructor(x = 0, y = 0){
    this.x = x;
    this.y = y;
  }

  toArray() {
    return [this.x, this.y];
  }

  add(value) {
    if ('x' in value) this.x += value.x;
    if ('y' in value) this.y += value.y;

    if (typeof value === 'number') {
      this.x += value;
      this.y += value;
    }

    return this;
  }

  subtract(value) {
    if ('x' in value) this.x -= value.x;
    if ('y' in value) this.y -= value.y;

    if (typeof value === 'number') {
      this.x -= value;
      this.y -= value;
    }

    return this;
  }

  multiply(value) {
    if (typeof value === 'number') {
      this.x *= value;
      this.y *= value;
    }

    return this;
  }

  divide(value) {
    if (typeof value === 'number') {
      this.x /= value;
      this.y /= value;
    }

    return this;
  }

  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
}
