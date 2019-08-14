import { SphereGeometry, CubeGeometry, ConeGeometry } from './geometry.presets';

export default class GeometryFactory {
  constructor() {
    this.Geometry = null;
  }

  create(options) {
    switch (options.gType) {
      case 'sphere':
        this.Geometry = SphereGeometry;
        break;
      case 'cube':
        this.Geometry = CubeGeometry;
        break;
      case 'cone':
        this.Geometry = ConeGeometry;
        break;
      default:
    }
    return new this.Geometry(options);
  }
}
