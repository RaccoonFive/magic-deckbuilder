import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { MatToolbarModule } from '@angular/material';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckListComponent } from './components/deck-list/deck-list.component';
import { DeckNewComponent } from './components/deck-new/deck-new.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckListComponent,
    DeckNewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatToolbarModule,
    AppRoutingModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
