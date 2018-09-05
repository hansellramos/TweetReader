export class Search {
  hashtag: string;
  city: string;
  query: string;

  constructor(query: string = '', hashtag: string = '', city: string = '') {
    this.query = query;
    this.hashtag = hashtag;
    this.city = city;
  }
}
