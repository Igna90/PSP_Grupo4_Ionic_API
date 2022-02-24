import { TestBed } from '@angular/core/testing';

import { IgnAlbaService } from './ign-alba.service';

describe('IgnAlbaService', () => {
  let service: IgnAlbaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IgnAlbaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
