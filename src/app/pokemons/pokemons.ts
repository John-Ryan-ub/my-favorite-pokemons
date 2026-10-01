import { Component, inject } from '@angular/core';
import { MyPokemons } from '../my-pokemons';

@Component({
  imports: [],
  selector: 'app-pokemons',
  styleUrl: './pokemons.css',
  templateUrl: './pokemons.html',
})
export class Pokemons {
  pokemonService = inject(MyPokemons);

  kanto = this.pokemonService.kanto;
  johto = this.pokemonService.johto;
  hoenn = this.pokemonService.hoenn;

}
