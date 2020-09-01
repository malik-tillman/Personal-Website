import { TestBed } from '@angular/core/testing';

import { WorksListService } from './works-list.service';

describe('WorksListService', () => {
  let service: WorksListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorksListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
