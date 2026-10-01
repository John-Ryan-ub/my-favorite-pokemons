import { Component, inject } from '@angular/core';
import { MyPokemons } from '../my-pokemons';

@Component({
  imports: [MyPokemons],
  selector: 'app-pokemons',
  styleUrl: './pokemons.css',
  templateUrl: './pokemons.html',
})
export class Pokemons {}
