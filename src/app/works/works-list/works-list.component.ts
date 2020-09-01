import {Component, Input, OnDestroy, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { WorksListService, WorksList } from '../works-list.service';

@Component({
  selector: 'works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.scss']
})
export class WorksListComponent implements OnInit, OnChanges {
  @Input() types:string[];
  worksList:WorksList[] = [];

  constructor(private worksListService: WorksListService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.types)
      this.worksListService.getWorksListByType(this.types).subscribe(data => this.worksList = data);

    else
      this.worksListService.getWorksList().subscribe(data => this.worksList = data);
  }

  externalLink($event: MouseEvent) {
    $event.stopPropagation();
  }
}
