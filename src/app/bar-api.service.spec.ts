import { TestBed } from '@angular/core/testing';

import { BarApiService } from './bar-api.service';

describe('BarApiService', () => {
  let service: BarApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
