import { TestBed } from '@angular/core/testing';

import { PetWalkerService } from './pet-walker.service';

describe('PetWalkerService', () => {
  let service: PetWalkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetWalkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
