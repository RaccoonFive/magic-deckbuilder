import { Component, OnInit, ViewChild } from '@angular/core';
import { DeckService } from 'src/app/services/deck.service';
import { Deck } from 'src/app/class/deck';
import { MatSort, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.scss']
})
export class DeckListComponent implements OnInit {
  decks: Deck[];
  displayedColumns: string[] = ['name'];
  dataSource;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private deckService: DeckService
  ) { }

  ngOnInit() {
    this.decks = this.deckService.decks;
    this.dataSource = new MatTableDataSource(this.decks);
    this.dataSource.sort = this.sort;
  }

  test() {
    console.log('Hello');
    
  }

}
