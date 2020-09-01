import {Component, ElementRef, AfterViewInit, ViewChild} from '@angular/core';
import { WorksListService, WorksList } from '../works/works-list.service';

import Typed from 'typed.js';
import { gsap } from 'gsap';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  public menuToggle:boolean = false;

  public favoritesId:number[] = [130,131,134,145,148];

  public worksList:WorksList[] = [];

  private typedNameConfig: object = {
    strings: [ 'Malik_Tillman' ],
    typeSpeed: 100,
    startDelay: 1000,
    showCursor: false,
    loop: false,
  };

  @ViewChild("container") container: ElementRef;

  constructor(private worksListService: WorksListService, private router:Router) {
    worksListService.getWorksListByIds(this.favoritesId)
      .subscribe(( data ) => {
        this.worksList = data;
      })

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
}
