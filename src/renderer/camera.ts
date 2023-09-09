import { THREE } from "./three";
import { cameraConfig } from "../config";

export const mainCamera = new THREE.PerspectiveCamera(cameraConfig.fov, cameraConfig.aspect, cameraConfig.near, cameraConfig.far);

