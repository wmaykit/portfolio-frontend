import { TestBed } from '@angular/core/testing';

import { CorewarHttpService } from './corewar-http.service';

describe('CorewarHttpService', () => {
  let service: CorewarHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorewarHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
