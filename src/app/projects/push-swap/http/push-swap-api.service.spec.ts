import { TestBed } from '@angular/core/testing';

import { PushSwapApiService } from './push-swap-api.service';

describe('PushSwapApiService', () => {
  let service: PushSwapApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PushSwapApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
