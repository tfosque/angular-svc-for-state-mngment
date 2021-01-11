import { TestBed } from '@angular/core/testing';

import { EagleViewService } from './eagle-view.service';

describe('EagleViewService', () => {
  let service: EagleViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EagleViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
