import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Pokemart } from './pokemart/pokemart';
import { Cart } from './cart/cart';
import { Pokemons } from './pokemons/pokemons';

export const routes: Routes = [
  
  {path: '', component: Home},
  {path: 'pokemons', component: Pokemons},
  {path: 'pokemart',component: Pokemart},
  {path: 'cart',component: Cart},
  {path: '**',redirectTo: ''}

];
