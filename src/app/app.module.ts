import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowSearchComponent } from './show-search/show-search.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowService } from './show.service';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ShowSearchComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatInputModule
  ],
  exports:[FormsModule, ReactiveFormsModule, MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatInputModule],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 