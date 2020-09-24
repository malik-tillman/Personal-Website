import {Component, ElementRef, AfterViewInit, ViewChild} from '@angular/core';
import { FetchWorksService, MetaProject, CDN } from '../fetch-works.service';

import Typed from 'typed.js';
import { gsap } from 'gsap';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  public cdnUrl:string = CDN;

  public menuToggle:boolean = false;

  public favoritesId:number[] = [130,131,134,145,148];

  public worksList:MetaProject[] = [];

  private typedNameConfig: object = {
    strings: [ 'Malik_Tillman' ],
    typeSpeed: 100,
    startDelay: 1000,
    showCursor: false,
    loop: false,
  };

  @ViewChild("container") container: ElementRef;

  constructor(
    private fetchWorksService: FetchWorksService,
    private router:Router
  ) {
    fetchWorksService.getWorksListByIds(this.favoritesId)
      .then(( data:MetaProject[] ) => {
        this.worksList = data;
      })

    /* When route changes, close menu and scroll to top */
    router.events.subscribe(event => {
      if(event instanceof NavigationStart){
        this.menuToggle = false;
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    })
  }

  ngAfterViewInit(): void {
    const typedNameObj = new Typed('#name', this.typedNameConfig);
    typedNameObj.start();
  }

  toggleMenu() {
    this.menuToggle = !this.menuToggle;
  }

  closeMenu() {
    this.menuToggle = false;
  }

  /* Resolves Media URL */
  resolveURL(uri, type) {
    if(type == 'webp')
      return `https://${this.cdnUrl}/images/${uri}.webp`;

    return `https://${this.cdnUrl}/images/${uri}.jpg`;
  }
}
