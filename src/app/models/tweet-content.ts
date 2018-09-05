import {User} from './user';

export class TweetContent {
  id: number;
  text: string;
  user: User;

  constructor(id: number, text: string, user: User) {
    this.id = id;
    this.text = text;
    this.user = user;
  }

  static fromTwitterJson(tweetJson: JSON): TweetContent {
    return new TweetContent(
      tweetJson['id']
      , tweetJson['text']
      , User.fromTwitterJson(tweetJson['user'])
    );
  }
}
