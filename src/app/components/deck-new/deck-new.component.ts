import { Component, OnInit } from '@angular/core';
import { DeckService } from 'src/app/services/deck.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Deck } from 'src/app/class/deck';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-deck-new',
  templateUrl: './deck-new.component.html',
  styleUrls: ['./deck-new.component.scss']
})
export class DeckNewComponent implements OnInit {
  newDeckForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(
    private deckService: DeckService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  addDeck() {
    this.deckService.addDeck(this.newDeckForm.value as Deck).subscribe(deck => {
      this.router.navigate(['deck-list']);
      this.snackBar.open(`Added deck : '${deck.name}'`, 'Close', {
        duration: 2000
      });
    });
  }

}
