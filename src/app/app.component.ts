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
        setTimeout(() => {
          this.buildVideoPlayers();
        }, 1000);
      }
    );
  }

  buildVideoPlayers() {
    debugger;
    Array.from(document.getElementsByClassName('video-player-id'))
      .forEach(element => {
        this.buildVideoPlayer({
          videoId: element['value'],
          id: element.id
        });
      });
  }

  buildVideoPlayer(options) {
    return new (<any>window).YT.Player(`player-${options.id}`, {
      height: '40%',
      width: '150px',
      videoId: options.videoId,
      playerVars: {'autoplay': 0, 'rel': 0, 'controls': 2},
      events: {
        'onReady': (event) => {
          document.getElementById(`name-${options.id}`)['value']
           = document.getElementById(`result-title-${options.id}`)['innerHTML']
           = event.target.getVideoData().title;
        }
      }
    });
  }
}
