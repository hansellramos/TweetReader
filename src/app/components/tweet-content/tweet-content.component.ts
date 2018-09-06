import {Component, Input, OnInit} from '@angular/core';
import {TweetContent} from '../../models/tweet-content';

@Component({
  selector: 'app-tweet-content',
  templateUrl: './tweet-content.component.html',
  styleUrls: ['./tweet-content.component.css']
})
export class TweetContentComponent implements OnInit {

  constructor() { }

  @Input()
  content: TweetContent;

  ngOnInit() {
  }

}
