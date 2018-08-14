import { TestBed, inject } from '@angular/core/testing';

import { FurnitureServiceService } from './furniture-service.service';

describe('FurnitureServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FurnitureServiceService]
    });
  });

  it('should be created', inject([FurnitureServiceService], (service: FurnitureServiceService) => {
    expect(service).toBeTruthy();
  }));
});
