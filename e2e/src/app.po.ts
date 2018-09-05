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
}
