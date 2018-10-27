import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeckListComponent } from './components/deck-list/deck-list.component';
import { DeckNewComponent } from './components/deck-new/deck-new.component';

const routes: Routes = [
  { path: 'deck-list', component: DeckListComponent },
  { path: 'deck-new', component: DeckNewComponent },
  { path: '', redirectTo: 'deck-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
