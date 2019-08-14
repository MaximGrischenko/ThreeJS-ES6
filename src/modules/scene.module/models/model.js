import * as Three from 'three';
import MaterialFactory from './material.factory';
import GeometryFactory from './geometry.factory';

export default class Model {
  constructor() {
    // this.x = position.x || 1;
    // this.y = position.y || 1;
    this.x = 1;
    this.y = 1;

    // this.type = options.type || 'Sphere';
    // this.material = null;
    // this.geometry = null;
    // this.mesh = null;
  }

  createMaterial(options) {
    const factory = new MaterialFactory();
    this.material = factory.create(options);

    const hue = Math.random();
    const saturation = 1;
    const luminance = 0.5;
    this.material.color.setHSL(hue, saturation, luminance);
  }

  createGeometry(options) {
    const factory = new GeometryFactory();
    this.geometry = factory.create(options);
  }

  createMesh(options) {
    this.createGeometry(options);
    this.createMaterial(options);

    this.mesh = new Three.Mesh(this.geometry, this.material);
    this.x = Math.random() * 10;
    this.y = Math.random() * 10;
    this.mesh.position.set(this.x, this.y, 0);
  }
}
