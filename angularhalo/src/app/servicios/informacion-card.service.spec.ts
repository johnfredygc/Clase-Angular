import { TestBed } from '@angular/core/testing';

import { InformacionCardService } from './informacion-card.service';

describe('InformacionCardService', () => {
  let service: InformacionCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformacionCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
