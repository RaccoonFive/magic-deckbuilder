import { Component, OnInit } from '@angular/core';
import { DeckService } from 'src/app/services/deck.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Deck } from 'src/app/class/deck';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  addDeck() {
    this.deckService.addDeck(this.newDeckForm.value as Deck);
    this.router.navigate(['deck-list']);
    this.toastr.success('Deck added!');
  }

}
