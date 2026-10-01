import { Injectable, signal, computed } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MyPokemons {
    kanto = signal ([
      { name: 'Charizard', 
        type: 'Fire / Flying', 
        heldItem: 'Charizardite Y', 
        description: 'Flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything.' },
      { name: 'Gengar', 
        type: 'Ghost / Poison', 
        heldItem: 'Life Orb', 
        description: 'Hiding in people\'s shadows at night, it is said to absorb their heat. The chill it causes makes the victims shiver.' }
    ]);

    johto = signal([
      { name: 'Tyranitar', 
        type: 'Rock / Dark', 
        heldItem: 'Leftovers', 
        description: 'Its body cannot be harmed by any sort of attack, so it is very eager to make challenges against enemies.' },
      { name: 'Ampharos', 
        type: 'Electric', 
        heldItem: 'Light Clay', 
        description: 'The tail\'s tip shines brightly, and can be seen from far away. It has been treasured since ancient times as a beacon.' }
    ]);

    hoenn = signal([
      { name: 'Sceptile', 
        type: 'Grass', 
        heldItem: 'Miracle Seed', 
        description: 'The leaves growing on its arms can slice down thick trees. It is without peer in jungle combat.' },
      { name: 'Gardevoir', 
        type: 'Psychic / Fairy', 
        heldItem: 'Choice Specs', 
        description: 'To protect its Trainer, it will expend all its psychic power to create a small black hole.' }
    ]);

    private martItems = signal<any[]>([
        { id: 1, name: 'Poké Ball', price: 200, category: 'Balls', description: 'A device for catching wild Pokémon.' },
        { id: 2, name: 'Great Ball', price: 600, category: 'Balls', description: 'A high-performance Ball that provides a higher catch rate.' },
        { id: 3, name: 'Ultra Ball', price: 1200, category: 'Balls', description: 'An ultra-performance Ball providing an even higher success rate.' },
        { id: 4, name: 'Potion', price: 300, category: 'Healing', description: 'Restores a Pokémon\'s HP by 20 points.' },
        { id: 5, name: 'Super Potion', price: 700, category: 'Healing', description: 'Restores a Pokémon\'s HP by 60 points.' },
        { id: 6, name: 'Hyper Potion', price: 1500, category: 'Healing', description: 'Restores a Pokémon\'s HP by 120 points.' },
        { id: 7, name: 'Full Restore', price: 3000, category: 'Healing', description: 'Fully restores HP and heals all status conditions.' },
        { id: 8, name: 'Revive', price: 1500, category: 'Healing', description: 'Revives a fainted Pokémon, restoring half its max HP.' },
        { id: 9, name: 'Escape Rope', price: 550, category: 'Utility', description: 'A long, durable rope that lets you escape instantly from caves.' },
        { id: 10, name: 'Max Repel', price: 900, category: 'Utility', description: 'Prevents weak wild Pokémon from appearing for 250 steps.' }
    ]);

    mart = this.martItems.asReadonly();

    totalPrice = computed(() => 
        this.martItems().reduce((sum, item) => sum + item.price, 0)
    );

    addToCart(product: any) {
        this.martItems.update(current => [...current, product]);
    }

    clearCart() {
        this.martItems.set([]);
    }
}
