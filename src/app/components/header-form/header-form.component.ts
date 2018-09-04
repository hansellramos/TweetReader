import { Component, OnInit } from '@angular/core';
import {Search} from '../../models/search';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.css']
})
export class HeaderFormComponent implements OnInit {

  search: Search;

  constructor() {
    this.search = new Search();
  }

  ngOnInit() {
    this.search.city = 'San Francisco';
    this.search.hashtag = 'nowPlaying';
  }

}
