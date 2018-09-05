import { Injectable } from '@angular/core';
import { mockTwitterFactory } from '../models/mock/tweet-content.data.mock';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor() { }

  search(query: string) {
    return mockTwitterFactory();
  }
}
