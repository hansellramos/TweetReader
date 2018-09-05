import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TweetContent } from '../models/tweet-content';

@Injectable({
  providedIn: 'root'
})
export class TwitterResultsService {

  /**
   * Subject used to announce result changes
   */
  private twitterResultsAnnouncedSource = new Subject<Array<TweetContent>>();

  /**
   * Used to suscribe to results changes
   */
  twitterResultsAnnounced$ = this.twitterResultsAnnouncedSource.asObservable();

  /**
   * Used to announce from external sources result changes
   * @param twitterResults New results to announce
   */
  announceTwitterResults(twitterResults: Array<TweetContent>) {
    this.twitterResultsAnnouncedSource.next(twitterResults);
  }
}
