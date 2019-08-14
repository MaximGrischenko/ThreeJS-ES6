import './app.scss';
import './modules/controls.module/style.controls.scss';
import './modules/scene.module/style.scene.scss';
import Controls from './modules/controls.module/controls';
import Environment from './modules/scene.module/environment';

if (module.hot) {
  module.hot.accept();
}

document.addEventListener('DOMContentLoaded', () => {
  const environment = new Environment();
  const controls = new Controls(environment);
});
