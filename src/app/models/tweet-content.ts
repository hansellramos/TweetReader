import {User} from './user';

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
   * Tweet user
   */
  user: User;

  constructor(id: number, text: string, user: User) {
    this.id = id;
    this.text = text;
    this.user = user;
  }

  /**
   * Returns TweetContent object from json source
   * @param tweetJson Json source
   * @return TweetContent
   */
  static fromTwitterJson(tweetJson: JSON): TweetContent {
    return new TweetContent(
      tweetJson['id']
      , tweetJson['text']
      , User.fromTwitterJson(tweetJson['user'])
    );
  }
}
