import * as Three from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { element, converter } from '../../utilities';

// import './style.scene.scss';

// const template = '<section id="WebGL"></section>';

class Environment {
  constructor() {
    this.el = element('#WebGL');
    this.popup = element('#popup');
    this.delete = element('#delete');
    this.color = element('#color');
    this.scene = null;
    this.camera = null;
    this.raycaster = null;
    this.controls = null;
    this.renderer = null;
    this.requestAF = null;
    this.mouse = { x: 0, y: 0 };
    this.uuid = '';

    // window.addEventListener('click', () => {
    //   this.popup.style.top = '-250px';
    // });

    window.addEventListener('resize', () => {
      const width = this.el.clientWidth;
      const height = this.el.clientHeight;

      // const width = window.innerWidth;
      // const height = window.innerHeight;

      this.renderer.setSize(width, height);
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
    });
    this.animate = this.animate.bind(this);

    this.delete.addEventListener('click', () => {
      this.deleteObject(this.uuid);
    });

    this.color.addEventListener('change', (event) => {
      // event.stopPropagation();
      const obj = this.scene.children.filter(child => child.uuid === this.uuid);
      obj[0].material.color.set(event.target.value);
      this.popup.style.top = '-250px';
    });

    this.render();
  }

  render() {
    this.scene = new Three.Scene();
    // this.camera = new Three.PerspectiveCamera(70, this.el.clientWidth / this.el.clientHeight, 0.01, 1000);
    this.camera = new Three.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000);
    this.controls = new OrbitControls(this.camera, this.el);
    this.renderer = new Three.WebGLRenderer({ antialias: true });
    this.raycaster = new Three.Raycaster();

    this.camera.position.z = 20;
    this.renderer.setClearColor(0xeeeeee);
    // this.renderer.setSize(this.el.clientWidth, this.el.clientHeight);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.addEventListener('click', (event) => {
      event.stopPropagation();

      this.mouse.x = (event.clientX / this.el.clientWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / this.el.clientHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.scene.children);
      if (intersects.length) {
        this.popup.style.display = 'block';
        this.popup.style.opacity = 1;
        this.popup.style.top = event.clientY + 'px';
        this.popup.style.left = event.clientX + 20 + 'px';

        const details = element('#details');

        for (let i = 0; i < intersects.length; i++) {
          this.uuid = intersects[i].object.uuid;
          details.innerHTML = `<p>${intersects[i].object.geometry.type}\n</p><p>${intersects[i].object.uuid}</p>`;
          const colors = { ...intersects[i].object.material.color };
          this.color.value = converter(colors.r, colors.g, colors.b);
        }
      } else {
        this.popup.style.opacity = 0;
      }
    });
    this.el.appendChild(this.renderer.domElement);

    const lights = [];
    lights[0] = new Three.PointLight(0xffffff, 1, 0);
    lights[0].position.set(0, 200, 0);
    this.scene.add(lights[0]);

    this.animate();
  }

  animate() {
    this.requestAF = requestAnimationFrame(this.animate);

    this.scene.children.forEach((child) => {
      child.rotation.x += 0.01;
      child.rotation.y += 0.02;
    });

    this.renderer.render(this.scene, this.camera);
  }

  addObject(mesh) {
    this.scene.add(mesh);
  }

  deleteObject(uuid) {
    this.scene.children = this.scene.children.filter(child => child.uuid !== uuid);
    this.popup.style.display = 'none';
    this.popup.style.opacity = 0;
  }
}

export default Environment;
