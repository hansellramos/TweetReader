export class Search {

  /**
   * Represents twitter hashtag parameter
   */
  hashtag: string;

  /**
   * Represents city that results are close
   */
  city: string;

  /**
   * Represents query parameters for twitter search
   */
  query: string;

  constructor(query: string = '', hashtag: string = '', city: string = '') {
    this.query = query;
    this.hashtag = hashtag;
    this.city = city;
  }
}
