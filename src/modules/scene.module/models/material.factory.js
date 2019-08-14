import {
  BasicMaterial, PhongMaterial, LambertMaterial, ToonMaterial,
} from './material.presets';

export default class MaterialFactory {
  constructor() {
    this.Material = null;
  }

  create(options) {
    switch (options.mType) {
      case 'BasicMaterial':
        this.Material = BasicMaterial;
        break;
      case 'PhongMaterial':
        this.Material = PhongMaterial;
        break;
      case 'LambertMaterial':
        this.Material = LambertMaterial;
        break;
      case 'ToonMaterial':
        this.Material = ToonMaterial;
        break;
      default: {
        this.Material = BasicMaterial;
      }
    }
    return new this.Material();
  }
}
