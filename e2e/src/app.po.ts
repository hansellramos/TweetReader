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
  getParagraphText() {
    return element(by.css('app-root app-header-form h1.title')).getText();
  }

  getDescription() {
    return element(by.css('app-root app-header-form p.description')).getText();
  }
}
