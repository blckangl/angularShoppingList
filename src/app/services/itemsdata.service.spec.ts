import { TestBed } from '@angular/core/testing';

import { ItemsDataService } from './items-data.service';

describe('ItemsdataService', () => {
  let service: ItemsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
