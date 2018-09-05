import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TweetContent } from '../models/tweet-content';

@Injectable({
  providedIn: 'root'
})
export class TwitterResultsService {

  private twitterResultsAnnouncedSource = new Subject<Array<TweetContent>>();

  twitterResultsAnnounced$ = this.twitterResultsAnnouncedSource.asObservable();

  announceTwitterResults(twitterResults: Array<TweetContent>) {
    this.twitterResultsAnnouncedSource.next(twitterResults);
  }
}
