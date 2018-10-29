import { Injectable, OnInit } from '@angular/core';
import { Deck } from '../class/deck';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(
    private http: HttpClient
  ) { }

  getDecks(): Observable<Deck[]> {
    return this.http.get<Deck[]>(`${environment.apiUrl}/decks`);
  }

  addDeck(deck: Deck): Observable<Deck> {
    return this.http.post<Deck>(`${environment.apiUrl}/decks`, deck);
  }
}
