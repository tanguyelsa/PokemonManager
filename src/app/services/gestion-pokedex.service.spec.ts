import { TestBed } from '@angular/core/testing';

import { GestionPokedexService } from './gestion-pokedex.service';

describe('GestionPokedexService', () => {
  let service: GestionPokedexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionPokedexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
