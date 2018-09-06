import {User} from './user';
import { lookForYoutubeVideoId } from '../common/common';

export class TweetContent {

  /**
   * Tweet id
   */
  id: number;

  /**
   * Tweet text
   */
  text: string;

  /**
   * Represents tweet youtube video id
   */
  video: string | boolean;

  /**
   * Timestamp of tweet date creation
   */
  createdAt: number;

  /**
   * Tweet user
   */
  user: User;

  constructor(id: number, text: string, video: string | boolean, createdAt: number, user: User) {
    this.id = id;
    this.text = text;
    this.video = video;
    this.createdAt = createdAt;
    this.user = user;
  }

  /**
   * Returns TweetContent object from json source
   * @param tweetJson Json source
   * @return TweetContent
   */
  static fromTwitterJson(tweetJson: JSON): TweetContent {
    return new TweetContent(
      tweetJson['id_str']
      , tweetJson['text']
      , lookForYoutubeVideoId(tweetJson['entities']['urls'])
      , new Date(tweetJson['created_at']).getTime()
      , User.fromTwitterJson(tweetJson['user'])
    );
  }
}
