import { TestBed } from '@angular/core/testing';

import { FeatureFlippingApiService } from './feature-flipping-api.service';

describe('FeatureFlippingApiService', () => {
  let service: FeatureFlippingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureFlippingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
