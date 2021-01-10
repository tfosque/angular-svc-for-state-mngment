import { TestBed } from '@angular/core/testing';

import { SuggestiveSellingService } from './suggestive-selling.service';

describe('SuggestiveSellingService', () => {
  let service: SuggestiveSellingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuggestiveSellingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
