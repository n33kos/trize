/**
 * A class to contain all scene objects
 * @class Scene
 * @param {string} element - ID of the canvas element
 * @param {Scene} scene - Scene object containing all scene
 */

const uuidv4 = require('uuid/v4');

export default class {
  constructor(element) {
    this.objects = [];
  }

  add(object) {
    object.uuid = uuidv4();
    this.objects.push(object);
  }

  remove(uuid) {
    this.objects = this.objects.filter(el => el.uuid !== uuid);
  }
}
