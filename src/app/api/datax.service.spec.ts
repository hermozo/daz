import { TestBed } from '@angular/core/testing';

import { DataxService } from './datax.service';

describe('DataxService', () => {
  let service: DataxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
