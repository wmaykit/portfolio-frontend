import { TestBed } from '@angular/core/testing';

import { PushSwapApiService } from './push-swap-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PushSwapApiService', () => {
  let service: PushSwapApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PushSwapApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
