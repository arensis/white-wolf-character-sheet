/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CharacterSheetStoreService } from './character-sheet-store.service';

describe('Service: CharacterSheetStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterSheetStoreService]
    });
  });

  it('should ...', inject([CharacterSheetStoreService], (service: CharacterSheetStoreService) => {
    expect(service).toBeTruthy();
  }));
});
