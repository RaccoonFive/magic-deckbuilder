import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/class/card';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Subject, timer } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent implements OnInit {
  cards: Card[];
  searchText = new FormControl('');
  searchTerms = new Subject<string>();
  showSpinner = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    )
    .subscribe(value => {
      this.loadCards();
    });
  }

  search() {
    this.searchTerms.next(this.searchText.value);
  }

  loadCards() {
    if (this.searchText.value === '') {
      this.cards = [];
    } else {
      this.cards = [];
      this.showSpinner = true;

      this.http.get<any>(`${environment.mtgApiUrl}/cards?name=${this.searchText.value}`).subscribe(response => {
        this.showSpinner = false;
        this.cards = response.cards.filter(card => card.imageUrl !== undefined);
      });
    }
  }
}
