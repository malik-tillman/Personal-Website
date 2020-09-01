import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorksListService {
  private hostUrl:string = 'api.maliktillman.com';

  constructor(private http: HttpClient) { }

  getWorksList = () => {
    return this.http.get<WorksList[]>(`https://${ this.hostUrl }/work-list`);
  }

  getWorksListByType = ( type:string[] ) => {
    return this.http.get<WorksList[]>(`https://${ this.hostUrl }/work-list/${ type.join(',') }`);
  }

  getWorksListByIds = ( ids:number[] ) => {
    // Used comma delimiter instead of semi-colon because of ad-blockers
    return this.http.get<WorksList[]>(`https://${ this.hostUrl }/work-list_by-ids/${ ids.join(',') }`);
  }
}

export interface WorksList {
  id: number,
  hidden: boolean,
  name: string,
  category: string,
  tags: string,
  thumbnail: string,
  github: string,
  behance: string,
  website: string
}
