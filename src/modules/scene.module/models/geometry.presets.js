import * as Three from 'three';

export class SphereGeometry {
  constructor(options) {
    this.geometry = new Three.SphereBufferGeometry(options.radius, 16, 16);
    return this.geometry;
  }
}

export class CubeGeometry {
  constructor(options) {
    this.geometry = new Three.BoxBufferGeometry(options.width, options.height, options.depth);
    return this.geometry;
  }
}

export class ConeGeometry {
  constructor(options) {
    this.geometry = new Three.ConeBufferGeometry(options.radius, options.height, 16);
    return this.geometry;
  }
}
