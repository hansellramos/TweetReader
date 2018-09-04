export class Search {
  hashtag: string;
  city: string;

  constructor(hashtag: string = '', city: string = '') {
    this.hashtag = hashtag;
    this.city = city;
  }
}
