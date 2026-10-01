import { TestBed } from '@angular/core/testing';
import { MyPokemons } from './my-pokemons';

describe('MyPokemons', () => {
  let service: MyPokemons;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPokemons);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
