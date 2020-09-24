import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';
import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {element} from 'protractor';
import { FetchWorksService, MetaProject, CDN } from '../fetch-works.service';
import {NavigationStart, Router} from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements AfterViewInit {
  @ViewChild("main") _canvas: ElementRef;
  @ViewChild("image") _image: ElementRef;

  public _hover = {
    state: false,
    image: ''
  };

  public worksList:MetaProject[] = [];

  public _hoverIDs = [130,131,135,154,148];

  public _show = [
    false,
    false,
    false,
    false,
    false
  ]

  public cdn_url: string = CDN;

  private get canvas(): HTMLCanvasElement {
    return this._canvas.nativeElement;
  }

  constructor(
    private fetchWorksService: FetchWorksService,
    private router:Router
  ) {
    fetchWorksService.getWorksListByIds(this._hoverIDs)
      .then((data:MetaProject[]) => {
        this.worksList = data;
      })
  }

  ngAfterViewInit(): void {
    let renderer;
    let scene;
    let camera;
    let raycaster;
    let controls;

    let cube;
    let plane;
    let gltfObj;
    let logo;
    let cubes = [];
    let mouse;

    let rectLight;
    let mainRectLight;

    let cachedDistance;

    /* Create Renderer */
    {
      renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        alpha: true,
        antialias: true,
        logarithmicDepthBuffer: true
      });

      renderer.setPixelRatio(window.devicePixelRatio || 1);

      raycaster = new THREE.Raycaster();

      mouse = new THREE.Vector2();
    }

    /* Create Scene */
    {
      scene = new THREE.Scene();
    }

    /* Create Camera */
    {
      camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 500 );
      camera.position.set(8, 27, 20 );
      camera.lookAt(0, 25, 0);
    }

    /* Add Fog */
    {
      // scene.fog = new THREE.FogExp2(
      //   "rgb(255,0,0)",
      //   5
      // )
    }

    /* Create Controls and Camera */
    {
      // controls = new OrbitControls(camera, renderer.domElement);
      // controls.autoRotate = true;
      // controls.enableDamping = true;
      // controls.enableZoom = false;
      // controls.enablePan = true;

      // controls.maxPolarAngle = Math.PI/2;
      // controls.maxAzimuthAngle = .5;
      // controls.minAzimuthAngle = 5.9;
    }

    /* Create Cube */
    {
      let geometry = new THREE.BoxGeometry();
      let material = new THREE.MeshStandardMaterial({color: "rgb(255,0,0)"});
      cube = new THREE.Mesh(geometry, material);
    }

    /* Create Plane */
    {
      let geometry = new THREE.PlaneGeometry(1000, 1000);
      let material = new THREE.MeshStandardMaterial({color: "rgb(112,112,112)"});
      plane = new THREE.Mesh(geometry, material);
      plane.rotation.x = THREE.MathUtils.degToRad(-90);
      plane.position.z = 500;
    }

    /* Create Lights */
    {
      RectAreaLightUniformsLib.init();

      /* Rect Light */
      rectLight = new THREE.RectAreaLight("rgb(172,172,172)", 50, 100, 100);
      rectLight.position.set(10,50,-200);
      rectLight.rotation.y = THREE.MathUtils.degToRad(150);

      /* Main Rect Light */
      mainRectLight = new THREE.RectAreaLight("rgb(172,172,172)", 2, 100, 100);
      mainRectLight.position.set(10,50,100);
    }

    /* Load GLTF Object */
    {
      const gltfLoader = new GLTFLoader();

      gltfLoader.load('assets/3d/home-1.gltf', ( gltf => {
        gltfObj = gltf.scene;
        gltfObj.scale.set(.5,.5,.5);

        let material = new THREE.MeshPhysicalMaterial({
          color: "rgb(255,255,255)",
          flatShading: false
        });

        logo = {
          MAIN: gltfObj.getObjectByName('Logo'),
          CHUNKS: [
            gltfObj.getObjectByName('(A)_Extrude'),
            gltfObj.getObjectByName('(L)_Extrude'),
            gltfObj.getObjectByName('(E_1)_Extrude'),
            gltfObj.getObjectByName('(E_2)_Extrude'),
            gltfObj.getObjectByName('(K)_Null')
          ]
        };

        let index = 0;

        gltfObj.traverse(obj => {
          if (obj.isMesh) obj.material = material;
        })

        logo.CHUNKS.forEach( element => {
          element.layers.enable(1);
        })



        scene.add(gltfObj);
        scene.add(rectLight);
        scene.add(mainRectLight);

        // gltfObj.traverse(obj => { console.log(obj.name); })
        // console.log(objectToSceneGraph(gltfObj).join('\n'));
      }))
    }

    function render() {
      requestAnimationFrame(render);

      raycaster.setFromCamera( mouse, camera );
      let intersects = raycaster.intersectObjects( scene.children, true );
      let hovered = {
        state: false,
        object: null
      };

      if (resizeRenderer(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      if (logo)
        logo.MAIN.rotation.y += THREE.MathUtils.degToRad(-.2);

      if (cubes)
        cubes.forEach((cube, index) => {
          cube.rotation.z += THREE.MathUtils.degToRad(0.1*index/64);
          cube.rotation.y += THREE.MathUtils.degToRad(0.1*index/64);
          cube.rotation.x += THREE.MathUtils.degToRad(0.1*index/64);
        })

      if (intersects.length > 0) {
        hovered.object = intersects[0].object;
        hovered.state = true;

        if (hovered.object.name.includes('Cap')) {
          hovered.object = hovered.object.parent.parent;
        }

        else if (hovered.object.name.includes('Rounding')) {
          hovered.object = hovered.object.parent;
        }

        if(window.innerWidth < 630){

        }

        setHoverState(hovered);
      }

      else if(hovered && window.innerWidth > 630) {
        setHoverState(false);
      }

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
        renderer.width = width;
        renderer.height = height;
        renderer.setSize(width, height, false)
      }

      return needsResize;
    }

    const objectToSceneGraph = (obj, lines = [], isLast = true, prefix = '') => {
      const localPrefix = isLast ? '└─' : '├─';
      lines.push(`${prefix}${prefix ? localPrefix : ''}${obj.name || '*no-name*'} [${obj.type}]`);

      const newPrefix = prefix + (isLast ? '  ' : '│ ');
      const lastNdx = obj.children.length - 1;

      obj.children.forEach((child, ndx) => {
        const isLast = ndx === lastNdx;
        objectToSceneGraph(child, lines, isLast, newPrefix);
      });

      return lines;
    }

    const onMouseMove = ( event ) => {
      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

      if (this._hover.state && window.innerWidth > 630) {
        this._image.nativeElement.style.left = `${ event.clientX }px`;
        this._image.nativeElement.style.top = `${ event.clientY }px`;
      }
    }

    const setHoverState = ( hovered ) => {
      this._hover.state = hovered.state;

      if (hovered) {
        for(let i = 0; i < this._show.length; i++) {
          this._show[i] = false;
        }

        switch (hovered.object.name) {
          case '(A)_Extrude':
            this._show[0] = true
            break;

          case '(L)_Extrude':
            this._show[1] = true
            break;

          case '(E_1)_Extrude':
            this._show[2] = true
            break;

          case '(E_2)_Extrude':
            this._show[3] = true
            break;

          case '(K1)_Extrude':
          case '(K2)_Extrude':
            this._show[4] = true
            break;
        }
      }
    }

    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('touchend', onMouseMove, false);

    render();
  }

  /* Resolves Media URL */
  resolveURL(uri, type) {
    if(type == 'webp')
      return `https://${this.cdn_url}/images/${uri}.webp`;

    return `https://${this.cdn_url}/images/${uri}.jpg`;
  }

  /* Translates ThreeJS material color */
  colorTo(target, value, scene) {
    let initial = new THREE.Color(target.material.color.getHex());
    target = scene.getObjectByName(target);

    value = new THREE.Color(value.color.getHex());

    gsap.to(initial, 1, {
      r: value.r,
      g: value.g,
      b: value.b,
      ease: Cubic.easeInOut,
      onUpdate: function() { target.material.color = initial; }
    });
  }
}
