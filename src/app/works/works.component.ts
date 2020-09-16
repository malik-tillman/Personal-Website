import {Component, OnInit, OnDestroy, ViewChild, AfterViewInit, Input} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  ResolveEnd,
  Router
} from '@angular/router';

import { FetchWorksService, MetaProject, CDN } from '../fetch-works.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnDestroy {
  /* Dynamic CDN URL */
  public cdn_url:string = CDN;

  /* Project Type Title */
  public title:string;

  /* Active categories to be query for */
  private activeTypes:string[];

  /* Creative project categories */
  readonly creativeTypes:string[] = [
    'graphic',
    'video',
    'photo',
    'misc'
  ];

  /* Development project categories */
  readonly devTypes:string[] = [
    'web',
    'research',
    'app'
  ];

  /* Works list object */
  public worksList:MetaProject[] = [];

  /* Filter toggle coefficient */
  public filterToggle = false;

  /* Active Router Subscription, needs to be unsubscribed */
  public activeRouterSubscription:Subscription;

  constructor(
    private fetchWorksService: FetchWorksService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    /* Subscribe to router changes */
    this.activeRouterSubscription = this.activatedRoute.queryParams.subscribe(params => {
      /* Extract type parameter  */
      switch (params.type) {
        /* Multi type parameter */
        case 'dev':
          this.title = 'Dev Projects';
          this.activeTypes = this.devTypes;
          break;
        case 'creative':
          this.title = 'Creative Projects';
          this.activeTypes = this.creativeTypes;
          break;

        /* Single type parameter */
        default:
          if(params.type) {
            /* Capitalize type name for title */
            this.title = `${params.type.charAt(0).toUpperCase() + params.type.slice(1)} Projects`;
            this.activeTypes = [params.type];
          }

          /* Show all projects */
          else {
            this.title = 'All Projects';
            this.activeTypes = [];
          }
      }

      /* If parameter had a type, fetch data by type */
      if(this.activeTypes.length > 0)
        this.fetchWorksService.getWorksListByType(this.activeTypes)
          .then((data:MetaProject[]) => {
            this.worksList = data;
          })

      /* If no parameters, fetch all types */
      else
        this.fetchWorksService.getWorksList().then((data:MetaProject[]) => {
          this.worksList = data;
        })
    })
  }

  /* Unsubscribe from subscriptions */
  ngOnDestroy() {
    if(this.activeRouterSubscription)
      this.activeRouterSubscription.unsubscribe();
  }

  /**
   * SortByName
   * Sorts works list by name
   * */
  sortByName(desc) {
    this.worksList.sort((x:MetaProject, y:MetaProject) => {
      /* Declare comparator values */
      const _x = x.name.toUpperCase();
      const _y = y.name.toUpperCase();

      /* Comparator return coefficient */
      let comp;

      /* Compare Values */
      if(_x > _y)
        comp = 1;
      else if(_x < _y)
        comp = -1;
      else
        comp = 0;

      /* Flip for ascending/descending order */
      return desc? comp * -1: comp;
    });
  }

  /**
   * FilterByType
   * Filters works list by type, navigates router to selected value
   * */
  filterByType(type) {
    if(type.value)
      this.router.navigate(['works'], {queryParams: {type: type.value}}).then(r => {

      });

     else
      this.router.navigate(['works']).then(r => {

      });
  }

  /**
   * ToggleFilter
   * Flip filter toggle coefficient
   * */
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }

  /**
   * ExternalLink
   * Prioritize href propagation over angular router link
   * */
  externalLink($event: MouseEvent) {
    $event.stopPropagation();
  }
}
