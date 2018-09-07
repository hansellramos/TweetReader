import { Component, OnInit } from '@angular/core';
import {Tweet} from '../../models/tweet';

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.css']
})
export class TweetFormComponent implements OnInit {

  tweet: Tweet;

  constructor() {
    this.tweet = new Tweet();
  }

  ngOnInit() {
    this.tweet.videoUrl = 'youtube.com/';
  }

}
