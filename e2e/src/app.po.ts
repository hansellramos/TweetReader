import { browser, by, element } from 'protractor';

export class AppPage {

  /**
   * @description Navigate to start page
   */
  navigateTo() {
    return browser.get('/');
  }

  /**
   * @description Get text of title
   * @return Text of title
   */
  getTitleText() {
    return element(by.css('app-root h1.title')).getText();
  }

  /**
   * @description Get text of subtitle
   * @return Text of title
   */
  getSubtitleText() {
    return element(by.css('app-root app-header-form h2.subtitle')).getText();
  }

  /**
   * @description Get text of description
   * @return Text of description
   */
  getDescription() {
    return element(by.css('app-root app-header-form p.description')).getText();
  }
}
