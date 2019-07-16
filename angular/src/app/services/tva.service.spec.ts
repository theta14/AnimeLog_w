import { TestBed } from '@angular/core/testing';

import { TvaService } from './tva.service';

describe('TvaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvaService = TestBed.get(TvaService);
    expect(service).toBeTruthy();
  });
});
