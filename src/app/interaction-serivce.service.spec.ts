import { TestBed } from '@angular/core/testing';

import { InteractionSerivceService } from './interaction-serivce.service';

describe('InteractionSerivceService', () => {
  let service: InteractionSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InteractionSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
