import * as THREE from 'three';

/** Class that represents a plane that has a shader
 *  TODO: make a general threejs class.
 */
export class ShaderPlane {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.Renderer;

    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer();
    }

    get canvas() {
        return this.renderer.domElement.outerHTML;
    }
}



