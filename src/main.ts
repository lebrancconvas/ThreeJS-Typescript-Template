import { THREE, renderer, scene, mainCamera } from './renderer';
import { config } from './config';

// Render.
renderer.setSize(config.width, config.height);
renderer.render(scene, mainCamera);
