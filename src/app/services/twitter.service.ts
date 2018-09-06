import { Injectable } from '@angular/core';
import { mockTwitterFactory } from '../models/mock/tweet-content.data.mock';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  /**
   * Used to call twitter service
   * @param query Query parameters to search
   */
  search(query: string) {
    return mockTwitterFactory();
  }
}
