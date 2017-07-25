import { TestBed, inject } from '@angular/core/testing';

import { FoldersService } from './folders.service';

describe('FoldersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoldersService]
    });
  });

  it('should be created', inject([FoldersService], (service: FoldersService) => {
    expect(service).toBeTruthy();
  }));
});
