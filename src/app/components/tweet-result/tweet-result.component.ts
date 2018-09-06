import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {TweetContent} from '../../models/tweet-content';

@Component({
  selector: 'app-tweet-result',
  templateUrl: './tweet-result.component.html',
  styleUrls: ['./tweet-result.component.css']
})
export class TweetResultComponent implements OnInit {

  @Input('result')
  result: TweetContent;

  player;
  title: string;

  constructor() {
    this.title = '';
  }


  ngOnInit() {
    // (<any>window).onYouTubeIframeAPIReady = () => {
    //   this.player = new (<any>window).YT.Player(`player-${this.result.id}`, {
    //     height: '40%',
    //     width: '150px',
    //     videoId: '4Y4YSpF6d6w',
    //     playerVars: {'autoplay': 0, 'rel': 0, 'controls': 2},
    //     events: {
    //       'onReady': (event) => {
    //         this.title = this.player.getVideoData();
    //       }
    //     }
    //   });
    // };
  }

}
