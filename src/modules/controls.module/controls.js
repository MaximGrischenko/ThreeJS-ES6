import { element } from '../../utilities/index';
// import './style.controls.scss';
import Model from '../scene.module/models/model';

class Controls {
  constructor(env) {
  //  this.el = element('#toolbar');
    this.env = env;
    this.initEvents();

    this.config = {};
    this.inputs = null;
    this.radio = null;
  }

  setParameters(event) {
    const type = event.target.parentNode.dataset.type;
    const selector = `input[name="${type}"]:checked`;
    this.radio = element(selector);

    this.config = {
      ...this.config,
      options: {
        ...this.config.options,
        mType: this.radio.value,
      },
    };

    this.inputs = Array.from(event.target.parentNode.children).filter((a) => {
      return a.getAttribute('type') === 'number';
    });

    this.inputs.forEach((input) => {
      const parameter = input.getAttribute('data-params');
      this.config = {
        ...this.config,
        options: {
          ...this.config.options,
          [parameter]: input.value,
        },
      };
    });
  }

  initEvents() {
    let model = null;

    document.querySelectorAll('.create').forEach((item) => {
      item.addEventListener('click', (event) => {
        switch (event.target.parentNode.dataset.type) {
          case 'sphere':
            this.config = {
              ...this.config,
              options: {
                ...this.config.options,
                gType: item.parentNode.dataset.type,
              },
            };
            this.setParameters(event);
            break;
          case 'cube':
            this.config = {
              ...this.config,
              options: {
                ...this.config.options,
                gType: item.parentNode.dataset.type,
              },
            };
            this.setParameters(event);
            break;
          case 'cone':
            this.config = {
              ...this.config,
              options: {
                ...this.config.options,
                gType: item.parentNode.dataset.type,
              },
            };
            this.setParameters(event);
            break;
          default:
        }

        model = new Model();
        model.createMesh(this.config.options);

        this.env.addObject(model.mesh);
        this.config = {};

        this.inputs.forEach((input) => {
          input.value = '';
        });
      });
    });
  }
}

export default Controls;
