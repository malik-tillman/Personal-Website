import {
  Component,
  OnChanges,
  Input,
  OnInit,
  SimpleChanges,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef,
  AfterContentInit, ViewChildren, QueryList
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  ResolveEnd,
  Router
} from '@angular/router';
import { FetchWorksService, Project, CDN } from '../fetch-works.service';
import { Subscription } from 'rxjs';
import Splide from '@splidejs/splide';
import Video from '@splidejs/splide-extension-video'

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnDestroy, AfterViewInit {
  /* Dynamic CDN URL */
  public cdn_url:string = CDN;

  /* Unsubscribe when component destroys */
  public activatedRouterSubscription:Subscription;

  /* Dom refs */
  @ViewChildren('images') private _imagesRef:QueryList<ElementRef>;
  @ViewChild('images_container') private imagesContainerRef:ElementRef;

  /* Splider Options */
  private sliderOptions:any = {
    type: 'loop',
    autoplay: true,
    interval: 10000,
    autoWidth: true,
    width: '100%',
    height: '50vh',
    focus: 'end',
    slideFocus: false,
    trimSpace: true,
    perPage: 1
  }

  /* Project Object */
  public project:Project;

  /* Media URIs */
  public imgURIs = [];
  public videoURIs = [];

  /* Image and Video Spliders */
  private imageSplide:Splide;
  private videoSplide:Splide;

  constructor(
    private router:Router,
    private fetchWorksService:FetchWorksService,
    private activatedRoute:ActivatedRoute
  ) {}

  ngAfterViewInit() {
    /* Subscribe to activated router to get query parameters */
    this.activatedRouterSubscription = this.activatedRoute.queryParams.subscribe(params => {
      this.fetchWorksService.getProject(params.id).then((data:Project) => {
        /* Fetch data */
        this.project = data;

        /* Cache images URIs and initialize slider */
        if(this.project.images) {
          this.imgURIs = this.project.images.split(',');
          this.initializeSplider(this._imagesRef, this.imageSplide, true);
        }

        /* Cache videos URIs and initialize slider */
        if(this.project.videos) {
          this.videoURIs = this.project.videos.split(',');
        }
      });
    })
  }

  /* Unsubscribe from subscriptions */
  ngOnDestroy() {
    if(this.activatedRouterSubscription)
      this.activatedRouterSubscription.unsubscribe();
  }

  /*
   * InitializeSplider
   * Resets current splider instance and initializes a new one when content is ready in Dom
   * */
  initializeSplider(list, splider, isImages) {
    if(list) {
      const _subscription = list.changes.subscribe((queryList:QueryList<ElementRef>) => {
        /* Reset */
        if(splider)
          splider.destroy();

        /* Initialize splider */
        this.imageSplide = new Splide(this.imagesContainerRef.nativeElement, {
          type: 'loop',
          autoplay: true,
          interval: 10000,
          autoWidth: true,
          width: '100%',
          height: '50vh',
          trimSpace: true,
          perPage: 1,
          breakpoints: {

          }
        }).mount();

        _subscription.unsubscribe();
      });
    }

    else
      throw 'List container is empty';
  }

  /**
   * ScrollToContent
   * when triggered, sets window scroll down a full height of the view (100vh)
   * */
  scrollToContent() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  /* Resolves Media URL */
  resolveURL(uri, type) {
    if(type == 'webp')
      return `https://${this.cdn_url}/images/${uri}.webp`;

    return `https://${this.cdn_url}/images/${uri}.jpg`;
  }
}
