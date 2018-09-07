import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderFormComponent } from './components/header-form/header-form.component';
import { TweetFormComponent } from './components/tweet-form/tweet-form.component';
import { TweetResultComponent } from './components/tweet-result/tweet-result.component';
import { TweetContentComponent } from './components/tweet-content/tweet-content.component';

import { TwitterService } from './services/twitter.service';
import {TwitterResultsService} from './services/twitter-results.service';
import { RelativeDatePipe } from './pipes/relative-date.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderFormComponent,
    TweetFormComponent,
    TweetResultComponent,
    TweetContentComponent,
    RelativeDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    TwitterService,
    TwitterResultsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
