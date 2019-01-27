import { TestBed } from '@angular/core/testing';

import { BluffService } from './bluff.service';

describe('BluffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BluffService = TestBed.get(BluffService);
    expect(service).toBeTruthy();
  });
});
