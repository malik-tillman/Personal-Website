import { TestBed } from '@angular/core/testing';

import { FetchWorksService } from './fetch-works.service';

describe('FetchWorksService', () => {
  let service: FetchWorksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchWorksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
