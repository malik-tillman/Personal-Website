import {Component, Input, OnDestroy, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { WorksListService, WorksList } from '../works-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.scss']
})
export class WorksListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() types:string[];
  worksList:WorksList[] = [];

  subscription:Subscription;

  constructor(private worksListService: WorksListService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.types)
      this.subscription = this.worksListService.getWorksListByType(this.types).subscribe(data => this.worksList = data);

    else
      this.subscription = this.worksListService.getWorksList().subscribe(data => this.worksList = data);
  }

  ngOnDestroy() {
    if(this.subscription)
      this.subscription.unsubscribe();
  }

  externalLink($event: MouseEvent) {
    $event.stopPropagation();
  }
}
