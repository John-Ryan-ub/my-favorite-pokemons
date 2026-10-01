import { Component, inject } from '@angular/core';
import { MyPokemons } from '../my-pokemons';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-pokemart',
  styleUrl: './pokemart.css',
  templateUrl: './pokemart.html',
})
export class Pokemart {
  pokemonService = inject(MyPokemons);

  items = this.pokemonService.mart;

  addToCart(item: any) {
    this.pokemonService.addToCart(item);
  }
}
