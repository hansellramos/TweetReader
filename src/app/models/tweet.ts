export class Tweet {

  /**
   * Represents tweet comment
   */
  comment: string;

  /**
   * Represents tweet video url
   */
  videoUrl: string;

  /**
   * Represents tweet hashtag
   */
  hashtag: string;

  /**
   * @description Default constructor
   * @param comment Default tweet comment
   * @param videoUrl Default tweet video url
   * @param hashtag Default tweet hashtag
   */
  constructor(comment: string = '', videoUrl: string = '', hashtag: string = '') {
    this.comment = comment;
    this.videoUrl = videoUrl;
    this.hashtag = hashtag;
  }

  /**
   * Get tweet content
   * @return Text of tweet based on comment and video url
   */
  get content(): string {
    return (`${this.comment} ${this.videoUrl}`).trim();
  }

}
