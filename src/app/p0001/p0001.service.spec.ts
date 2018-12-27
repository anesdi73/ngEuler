import { TestBed } from '@angular/core/testing';

import { P0001Service } from './p0001.service';

describe('P0001Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: P0001Service = TestBed.get(P0001Service);
    expect(service).toBeTruthy();
  });
});
