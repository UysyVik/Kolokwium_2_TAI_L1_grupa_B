import { TestBed } from '@angular/core/testing';

import { LMDataService } from './lm-data.service';

describe('LMDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LMDataService = TestBed.get(LMDataService);
    expect(service).toBeTruthy();
  });
});
