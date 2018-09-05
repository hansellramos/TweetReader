import { browser, by, element } from 'protractor';

export class AppPage {

  /**
   * @description Navigate to start page
   */
  navigateTo() {
    return browser.get('/');
  }

  /**
   * @description Get comment of title
   * @return Text of title
   */
  getTitleText() {
    return element(by.css('app-root h1.title')).getText();
  }

  /**
   * @description Get comment of subtitle
   * @return Text of title
   */
  getSubtitleText() {
    return element(by.css('app-root app-header-form h2.subtitle')).getText();
  }

  /**
   * @description Get comment of description
   * @return Text of description
   */
  getDescription() {
    return element(by.css('app-root app-header-form p.description')).getText();
  }

  /**
   * @description Get app-tweet-form component
   * @return app-tweet-form element
   */
  getTweetForm() {
    return element(by.css('app-root app-tweet-form'));
  }

  /**
   * @description Get app-tweet-form video url widget
   * @return app-tweet-form video url widget element
   */
  getTweetFormVideoUrlWidget() {
    return element(by.css('app-root app-tweet-form input[name=video-url]'));
  }

  /**
   * @description Get app-tweet-form video url widget label
   * @return app-tweet-form video url widget label element
   */
  getTweetFormVideoUrlWidgetLabel() {
    return element(by.css('app-root app-tweet-form label[for=video-url]'));
  }

  /**
   * @description Get app-tweet-form comment widget
   * @return app-tweet-form comment widget element
   */
  getTweetFormCommentWidget() {
    return element(by.css('app-root app-tweet-form input[name=comment]'));
  }

  /**
   * @description Get app-tweet-form comment widget label
   * @return app-tweet-form comment widget label element
   */
  getTweetFormCommentWidgetLabel() {
    return element(by.css('app-root app-tweet-form label[for=comment]'));
  }

  /**
   * @description Get app-tweet-form tweet link widget
   * @return app-tweet-form tweet link widget element
   */
  getTweetFormTweetLinkWidget() {
    return element(by.css('app-root app-tweet-form a.tweet-link'));
  }

  /**
   * @description Get app-tweet-form tweet link widget comment of
   * @return Text of app-tweet-form tweet link widget
   */
  getTweetFormTweetLinkWidgetText() {
    return element(by.css('app-root app-tweet-form a.tweet-link span')).getText();
  }

  /**
   * Get app-tweet-result component
   * @return app-tweet-result element
   */
  getTweetResultWidget() {
    return element(by.css('app-root app-tweet-result'));
  }

  /**
   * Get all app-tweet-result components
   * @return All app-tweet-result components
   */
  getAllTweetResults() {
    return element.all(by.css('app-root app-tweet-result'));
  }

  /**
   * Get app-tweet-result title
   * @return app-tweet-result title element
   */
  getTweetResultWidgetTitle() {
    return element(by.css('app-root app-tweet-result div.result-title h2'));
  }

  /**
   * Get app-tweet-result video
   * @return app-tweet-result video element
   */
  getTweetResultVideoWidget() {
    return element(by.css('app-root app-tweet-result div.result-video iframe'));
  }

  /**
   * Get app-tweet-result content
   * @return app-tweet-result content element
   */
  getTweetResultContentWidget() {
    return element(by.css('app-root app-tweet-result div.result-content app-tweet-content'));
  }

  /**
   * Get app-tweet-result content twitter logo
   * @return app-tweet-result content twitter logo element
   */
  getTweetResultContentTwitterLogo() {
    return element(by.css('app-root app-tweet-result div.result-content app-tweet-content img.twitter-logo'));
  }

  /**
   * Get app-tweet-result content user profile image
   * @return app-tweet-result content user profile image element
   */
  getTweetResultContentUserProfilePicture() {
    return element(by.css('app-root app-tweet-result div.result-content app-tweet-content div.user-profile-image img'));
  }

  /**
   * Get app-tweet-result content username
   * @return app-tweet-result content username element
   */
  getTweetResultContentUsernameWidget() {
    return element(by.css('app-root app-tweet-result div.result-content app-tweet-content div.username span'));
  }

  /**
   * Get app-tweet-result content username
   * @return app-tweet-result content username element
   */
  getTweetResultContentUserScreenNameWidget() {
    return element(by.css('app-root app-tweet-result div.result-content app-tweet-content div.screen-name span'));
  }

  /**
   * Get app-tweet-result content user follow link
   * @return app-tweet-result content follow link element
   */
  getTweetResultContentUserFollowButtonLink() {
    return element(by.css('app-root app-tweet-result div.result-content app-tweet-content div a.follow-link'));
  }

  /**
   * Get app-tweet-result content user retweet link
   * @return app-tweet-result content retweet link element
   */
  getTweetResultContentUserRetweetButtonLink() {
    return element(by.css('app-root app-tweet-result div.result-content app-tweet-content div a.retweet-link'));
  }

  /**
   * Get app-tweet-result content user like link
   * @return app-tweet-result content like link element
   */
  getTweetResultContentUserLikeButtonLink() {
    return element(by.css('app-root app-tweet-result div.result-content app-tweet-content div a.like-link'));
  }

  /**
   * Get app-tweet-result content user reply link
   * @return app-tweet-result content reply link element
   */
  getTweetResultContentUserReplyButtonLink() {
    return element(by.css('app-root app-tweet-result div.result-content app-tweet-content div a.reply-link'));
  }

  /**
   * Get app-tweet-result content user date widget
   * @return app-tweet-result content date widget
   */
  getTweetResultContentUserDateWidget() {
    return element(by.css('app-root app-tweet-result div.result-content app-tweet-content div span.date'));
  }

  /**
   * Get app-tweet-result content tweet text
   * @return app-tweet-result content tweet text
   */
  getTweetResultContentTweet() {
    return element(by.css('app-root app-tweet-result div.result-content app-tweet-content div.tweet-text h3'));
  }
}
