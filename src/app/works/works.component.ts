import {Component, OnInit, OnDestroy, ViewChild, AfterViewInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit, OnDestroy, AfterViewInit {
  title:string;

  activeTypes:string[];

  sub:any;

  creativeTypes:string[] = [
    'graphic',
    'video',
    'photo',
    'misc'
  ];

  devTypes:string[] = [
    'web',
    'research',
    'app'
  ];

  constructor(public router:Router) {
    this.sub = this.router.events.subscribe(( event ) => {
      if(event instanceof NavigationEnd) {
        if(this.router.url.includes('creative')){
          this.title = 'Creative Projects';
          this.activeTypes = this.creativeTypes;
        }

        else if(this.router.url.includes('dev')) {
          this.title = 'Dev Projects';
          this.activeTypes = this.devTypes;
        }

        else {
          this.title = 'All Projects';
          this.activeTypes = [];
        }
      }
    });
  }

  ngOnInit(): void { }

  ngAfterViewInit() { }

  ngOnDestroy() {
    if(this.sub)
      this.sub.unsubscribe();
  }
}
