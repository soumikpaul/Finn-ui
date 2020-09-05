import { TestBed } from '@angular/core/testing';

import { FinnairService } from './finnair.service';

describe('FinnairService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinnairService = TestBed.get(FinnairService);
    expect(service).toBeTruthy();
  });
});
