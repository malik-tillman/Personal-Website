import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private mainHostURL:string = 'api.maliktillman.com'

  constructor(private http: HttpClient) { }

  getProject = ( id ) => {
    return this.http.get(`https://${ this.mainHostURL }/works/${ id }`);
  }
}

export interface Project {
  id: number,
  hidden: boolean,
  name: string,
  category: string,
  tags: string,
  description: string,
  thumbnail: string,
  images: string,
  videos: string,
  github: string,
  behance: string,
  website: string
}
