import {TweetContent} from '../tweet-content';

import * as tweetsJson from './json/twitter-response.json';

export function mockTwitterFactory(limit: number = 5): Array<TweetContent> {
  const data: Array<TweetContent> = new Array<TweetContent>();
  tweetsJson['statuses'].forEach(element => {
    data.push(TweetContent.fromTwitterJson(element));
  });
  return data;
}


