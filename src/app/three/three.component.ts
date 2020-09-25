/**
 * three.component
 * @author Malik Tillman
 *
 * 2020
 * */
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {FetchWorksService, MetaProject, CDN, FavoritesId } from '../fetch-works.service';

@Component({selector: 'three', templateUrl: './three.component.html', styleUrls: ['./three.component.scss']})
export class ThreeComponent implements AfterViewInit {
  /* Dynamic CDN */
  public cdn_url: string = CDN;

  /* 3d Canvas Reference */
  @ViewChild("main") _canvas: ElementRef;

  /* Image container Reference */
  @ViewChild("image") _image: ElementRef;

  /* Manages hover state */
  public _hover = false;

  /* Cache for favorites project data */
  public worksList:MetaProject[] = [];

  /* Favorite project IDs */
  public _hoverIDs = FavoritesId;

  /* Manages which image to show when hovered */
  public _show = [ false, false, false, false, false ];

  /* Getter for canvas native element */
  private get canvas(): HTMLCanvasElement {
    return this._canvas.nativeElement;
  }

  constructor(
    private fetchWorksService: FetchWorksService,
  ) {
    /* Fetch and cache favorite projects */
    fetchWorksService.getWorksListByIds(this._hoverIDs).then((data:MetaProject[]) => { this.worksList = data })
  }

  ngAfterViewInit(): void {
    let cubes = [];

    /* Create renderer and scene */
    let renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      logarithmicDepthBuffer: true
    });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    let raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();
    let scene = new THREE.Scene();

    /* Create and set camera */
    let camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 500 );
    camera.position.set(8, 27, 20 );
    camera.lookAt(0, 25, 0);

    /* Create Lights */
    RectAreaLightUniformsLib.init();
    let rectLight = new THREE.RectAreaLight("rgb(172,172,172)", 50, 100, 100);
    rectLight.position.set(10,50,-200);
    rectLight.rotation.y = THREE.MathUtils.degToRad(150);

    let mainRectLight = new THREE.RectAreaLight("rgb(172,172,172)", 2, 100, 100);
    mainRectLight.position.set(10,50,100);

    /* Load GLTF Object */
    const gltfLoader = new GLTFLoader();
    let gltfObj;
    let logo;

    gltfLoader.load('assets/3d/home-1.gltf', ( gltf => {
      /* Get gltf objects */
      gltfObj = gltf.scene;

      /* Set object scene size */
      gltfObj.scale.set(.5,.5,.5);

      /* create material */
      let material = new THREE.MeshPhysicalMaterial({
        color: "rgb(255,255,255)",
        flatShading: false
      });

      /* Apply material */
      gltfObj.traverse(obj => {
        if (obj.isMesh) obj.material = material;
      })

      /* Parse object */
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

      /* Add object and lights */
      scene.add(gltfObj);
      scene.add(rectLight);
      scene.add(mainRectLight);
    }))

    /* Render animation frames */
    const render = () => {
      requestAnimationFrame(render);

      /* Fix aspect on window resize */
      if (resizeRenderer(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }

      /* Get mouse-camera intersects */
      raycaster.setFromCamera( mouse, camera );
      let intersects = raycaster.intersectObjects( scene.children, true );

      /* Check for mouse-camera intersections */
      if (intersects.length > 0) {
        /* Set hover state */
        this._hover = true;
        let hoveredObj;

        /* Parse hovered object */
        if (intersects[0].object.name.includes('Cap')) {
          hoveredObj = intersects[0].object.parent.parent.name;
        }
        else if (intersects[0].object.name.includes('Rounding')) {
          hoveredObj = intersects[0].object.parent.name;
        }
        else { hoveredObj = intersects[0].object.name }

        /* Hide all images */
        this._show = [ false, false, false, false, false ];

        /* Parse name to determine which image to show */
        switch (hoveredObj) {
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

      /* If no intersection but hovered is true, set to false */
      else if(this._hover && window.innerWidth > 630) { this._hover = false }

      /* Rotate logo */
      if (logo) logo.MAIN.rotation.y += THREE.MathUtils.degToRad(-.2);

      /* Render Frame */
      renderer.render(scene, camera);
    }

    /**
     * ResizeRenderer
     * Checks if render needs to be resized to container size
     */
    function resizeRenderer(renderer) {
      /* Declare variables */
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      /* Determine if renderer needs resize */
      const needsResize = canvas.width !== width || canvas.height !== height;

      /* Resize renderer */
      if (needsResize) {
        renderer.width = width;
        renderer.height = height;
        renderer.setSize(width, height, false)
      }

      /* Return resize boolean */
      return needsResize;
    }

    /**
     * ObjectToSceneGraph
     * Prints gltf object scenegraph
     * */
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

    /**
     * OnMouseMove
     * Records mouse position and if hovering over logo, updates image container position to mouse position
     * */
    const onMouseMove = ( event ) => {
      /* Cache mouse position */
      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

      /* Update image container position to mouse position */
      if (this._hover && window.innerWidth > 630) {
        this._image.nativeElement.style.left = `${ event.clientX }px`;
        this._image.nativeElement.style.top = `${ event.clientY }px`;
      }
    }

    window.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('touchend', onMouseMove, false);

    render();
  }

  /**
   * ResolveURL
   * Appends image type to image URI */
  resolveURL(uri, type) {
    if(type == 'webp')
      return `https://${this.cdn_url}/images/${uri}.webp`;

    return `https://${this.cdn_url}/images/${uri}.jpg`;
  }
}
