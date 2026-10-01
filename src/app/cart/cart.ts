import { Component, inject } from '@angular/core';
import { MyPokemons } from '../my-pokemons';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  pokemonService = inject(MyPokemons);

  cart = this.pokemonService.cart;

  totalPrice = this.pokemonService.totalPrice;

  removeItem(index: number) {
    this.pokemonService.removeFromCart(index);
  }

  clearCart() {
    this.pokemonService.clearCart();
  }
}
