import {TweetContent} from '../tweet-content';

import * as tweetsJson from './json/twitter-response.json';

/**
 * Used to generate TweetContent mock objects
 * @param limit Max number of mock elements
 */
export function mockTwitterFactory(limit: number = 5): Array<TweetContent> {
  const data: Array<TweetContent> = new Array<TweetContent>();
  tweetsJson['statuses'].forEach(element => {
    data.push(TweetContent.fromTwitterJson(element));
  });
  return data;
}


