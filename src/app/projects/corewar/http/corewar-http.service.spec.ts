import { TestBed } from '@angular/core/testing';

import { CorewarHttpService } from './corewar-http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CorewarHttpService', () => {
  let service: CorewarHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CorewarHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
