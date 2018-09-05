import { Component } from '@angular/core';
import {TweetContent} from './models/tweet-content';
import {TwitterResultsService} from './services/twitter-results.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tweets Reader';

  /**
   * Results of twitter search service from another component or service
   */
  results: Array<TweetContent>;

  constructor(
    private twitterResultsService: TwitterResultsService
  ) {
    this.results = new Array<TweetContent>();
    this.twitterResultsService.twitterResultsAnnounced$.subscribe(
      results => {
        this.results = results;
      }
    );
  }
}
