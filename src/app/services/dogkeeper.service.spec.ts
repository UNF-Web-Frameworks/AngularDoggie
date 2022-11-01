import { TestBed } from '@angular/core/testing';

import { DogkeeperService } from './dogkeeper.service';

describe('DogkeeperService', () => {
  let service: DogkeeperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogkeeperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
