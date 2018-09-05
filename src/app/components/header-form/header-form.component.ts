import { Component, OnInit } from '@angular/core';
import {Search} from '../../models/search';
import {TwitterService} from '../../services/twitter.service';
import {TwitterResultsService} from '../../services/twitter-results.service';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.css']
})
export class HeaderFormComponent implements OnInit {

  search: Search;

  constructor(
    private twitterService: TwitterService
    , private twitterResultsService: TwitterResultsService
  ) {
    this.search = new Search();
  }

  ngOnInit() {
    this.search.city = 'San Francisco';
    this.search.hashtag = 'nowPlaying';
    this.search.query = '(youtube.com or youtu.be)';
    this.retrieveResults();
  }

  retrieveResults() {
    const results =
      this.twitterService.search(`${this.search.hashtag} AND ${this.search.query}`);
    this.twitterResultsService.announceTwitterResults(results);
  }

}
