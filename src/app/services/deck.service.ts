import { Injectable, OnInit } from '@angular/core';
import { Deck } from '../class/deck';


@Injectable({
  providedIn: 'root'
})
export class DeckService {
  decks: Deck[] = [];

  constructor() { }

  addDeck(deck: Deck) {
    this.decks.push(deck);
  }
}
