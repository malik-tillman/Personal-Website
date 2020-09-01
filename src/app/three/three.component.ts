import {Component, ElementRef, AfterViewInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import {RectAreaLightUniformsLib} from 'three/examples/jsm/lights/RectAreaLightUniformsLib';
import {RectAreaLightHelper} from 'three/examples/jsm/helpers/RectAreaLightHelper';
import {OBJLoader2} from 'three/examples/jsm/loaders/OBJLoader2';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements AfterViewInit {
  @ViewChild("main") _canvas: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this._canvas.nativeElement;
  }

  constructor() { }

  ngAfterViewInit(): void {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );
    let renderer = new THREE.WebGLRenderer({canvas: this.canvas});

    let controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.enableDamping = true;

    RectAreaLightUniformsLib.init();

    //renderer.setSize( window.innerWidth, window.innerHeight );
    let geometry = new THREE.BoxGeometry();
    let material = new THREE.MeshStandardMaterial({color: "rgb(255,0,0)"});
    let cube = new THREE.Mesh(geometry, material);

    let planeGeometry = new THREE.PlaneGeometry(1000, 1000);
    let planeMaterial = new THREE.MeshStandardMaterial({color: "rgb(112,112,112)"});
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = THREE.MathUtils.degToRad(-90);
    plane.position.z = 500;

    let rectLight = new THREE.RectAreaLight("rgb(172,172,172)", 10, 10, 10);
    rectLight.position.set(10,5,-20);
    rectLight.rotation.y = THREE.MathUtils.degToRad(150);
    let helper = new RectAreaLightHelper(rectLight);
    rectLight.add(helper);

    let hemLight = new THREE.HemisphereLight( "rgb(255,255,255)", "rgb(255,201,201)", 1 );

    let ambLight = new THREE.AmbientLight( "rgb(255,255,255)", .5);

    const objLoader = new OBJLoader2();
    let obj;
    let logoMaterial = new THREE.MeshStandardMaterial({color: 'rgb(0,0,0)'})
    objLoader.addMaterials(logoMaterial, true);
    objLoader.load('assets/leek_logo-01.obj', (root) => {
      //root.position.set(0,15,-100);
      root.scale.set(.5,.5,.5);

      //scene.add(cube);
      scene.add(plane);
      scene.add(rectLight);
      scene.add(hemLight);
      scene.add(ambLight);
      scene.add(root);

      obj = root;
    })

    camera.position.z = 50;
    camera.position.y = 15;

    function animate() {
      requestAnimationFrame(animate);

      if (resizeRenderer(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix()
      }

      cube.rotation.x += THREE.MathUtils.degToRad(.5);

      if(obj)
        obj.rotation.y += THREE.MathUtils.degToRad(.5);

      controls.update();

      renderer.render(scene, camera);
    }

    /**
     * Checks if render needs to be resized to container size
     */
    function resizeRenderer(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needsResize = canvas.width !== width || canvas.height !== height;

      if (needsResize) {
        renderer.setSize(width, height, false)
      }

      return needsResize;
    }

    animate();
  }

}
