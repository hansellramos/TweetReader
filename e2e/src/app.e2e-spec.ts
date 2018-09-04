import { AppPage } from './app.po';

describe('e2e Test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display default title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('#nowPlaying in San Francisco');
  });
  it('should display default description', () => {
    page.navigateTo();
    expect(page.getDescription()).toEqual(
      'This page show #nowPlaying tweets in San Francisco ' +
      'that contain a YouTube link. It also allows you to post a nowPlaying tweet via YouTube link'
    );
  });
});
