import {Component, OnChanges, Input, OnInit, SimpleChanges, OnDestroy} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Project, ProjectService} from './project.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnChanges, OnDestroy {
  project:Project;
  images:string[] = [];
  videos:string[] = [];

  subscription:Subscription;

  public mediaCDN = 'https://cdn.maliktillman.com/file/maliktillman-media-store/';

  constructor(private router: Router, private projectService: ProjectService) {
    this.subscription = this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.projectService.getProject(this.router.url.split("/project/").pop())
          .subscribe((data:Project) => {
            this.project = data;

            if(this.project.images)
              this.images = this.project.images.split(',');

            if(this.project.videos)
              this.videos = this.project.videos.split(',');
          })
      }
    })
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {

  }

  ngOnDestroy() {
    if(this.subscription)
      this.subscription.unsubscribe();
  }

}
