import * as Three from 'three';

export class BasicMaterial {
  constructor() {
    this.material = new Three.MeshBasicMaterial(Three.FrontSide);
    return this.material;
  }
}

export class PhongMaterial {
  constructor() {
    this.material = new Three.MeshPhongMaterial(Three.FrontSide);
    return this.material;
  }
}

export class LambertMaterial {
  constructor() {
    this.material = new Three.MeshLambertMaterial(Three.FrontSide);
    return this.material;
  }
}

export class ToonMaterial {
  constructor() {
    this.material = new Three.MeshToonMaterial(Three.FrontSide);
    return this.material;
  }
}
