import { AppPage } from './app.po';

describe('e2e Test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display title', () => {
    expect(page.getTitleText()).toEqual('Tweets Reader');
  });
  it('should display default subtitle', () => {
    expect(page.getSubtitleText()).toEqual('#nowPlaying in San Francisco');
  });
  it('should display default description', () => {
    expect(page.getDescription()).toEqual(
      'This page show #nowPlaying tweets in San Francisco ' +
      'that contain a YouTube link. It also allows you to post a nowPlaying tweet via YouTube link'
    );
  });
  it('should display tweet form', () => {
    expect(page.getTweetForm().isPresent()).toBeTruthy();
  });
  it('tweet form should display video url widget', () => {
    const videoUrlWidgetElement = page.getTweetFormVideoUrlWidget();
    expect(videoUrlWidgetElement.isPresent()).toBeTruthy();
  });
  it('tweet form should display video url widget label', () => {
    const videoUrlWidgetElementLabel = page.getTweetFormVideoUrlWidgetLabel();
    expect(videoUrlWidgetElementLabel.isPresent()).toBeTruthy();
  });
  it('tweet form video url widget label should be equal to "Video URL:"', () => {
    const videoUrlWidgetElementLabel = page.getTweetFormVideoUrlWidgetLabel();
    expect(videoUrlWidgetElementLabel.getText()).toEqual('Video URL:');
  });
  it('tweet form should display comment widget', () => {
    const commentWidgetElement = page.getTweetFormCommentWidget();
    expect(commentWidgetElement.isPresent()).toBeTruthy();
  });
  it('tweet form should display comment widget', () => {
    const commentWidgetElement = page.getTweetFormCommentWidget();
    expect(commentWidgetElement.isPresent()).toBeTruthy();
  });
  it('tweet form should display comment widget label', () => {
    const commentWidgetElementLabel = page.getTweetFormCommentWidgetLabel();
    expect(commentWidgetElementLabel.isPresent()).toBeTruthy();
  });
  it('tweet form comment widget label should be equal to "Comment:"', () => {
    const commentWidgetElementLabel = page.getTweetFormCommentWidgetLabel();
    expect(commentWidgetElementLabel.getText()).toEqual('Comment:');
  });
  it('tweet form should display tweet link button', () => {
    const tweetLinkWidgetElement = page.getTweetFormTweetLinkWidget();
    expect(tweetLinkWidgetElement.isPresent()).toBeTruthy();
  });
  it('tweet form tweet link button default href value should be ' +
    'https://twitter.com/intent/tweet?text=&hashtags=nowPlaying', () => {
    const tweetLinkWidgetElement = page.getTweetFormTweetLinkWidget();
    expect(tweetLinkWidgetElement.getAttribute('href')).toEqual(
      'https://twitter.com/intent/tweet?text=&hashtags=nowPlaying'
    );
  });
  it('tweet form tweet link button default href value should be ' +
    'https://twitter.com/intent/tweet?text=youtube.com/testing&hashtags=nowPlaying ' +
    'when change video url value', () => {
    const videoUrlWidgetElement = page.getTweetFormVideoUrlWidget();
    videoUrlWidgetElement.videoUrlWidgetElement.sendKeys('youtube.com/testing');
    const tweetLinkWidgetElement = page.getTweetFormTweetLinkWidget();
    expect(tweetLinkWidgetElement.getAttribute('href')).toEqual(
      'https://twitter.com/intent/tweet?text=youtube.com/testing&hashtags=nowPlaying'
    );
  });
  it('tweet form tweet link button default href value should be ' +
    'https://twitter.com/intent/tweet?text=Hello World&hashtags=nowPlaying ' +
    'when change comment value', () => {
    const commentWidgetElement = page.getTweetFormCommentWidget();
    commentWidgetElement.videoUrlWidgetElement.sendKeys('Hello world');
    const tweetLinkWidgetElement = page.getTweetFormTweetLinkWidget();
    expect(tweetLinkWidgetElement.getAttribute('href')).toEqual(
      'https://twitter.com/intent/tweet?text=Hello world&hashtags=nowPlaying'
    );
  });
  it('tweet form tweet link button default href value should be ' +
    'https://twitter.com/intent/tweet?text=Hello World youtube.com/testing&hashtags=nowPlaying ' +
    'when change comment and video url values', () => {
    const commentWidgetElement = page.getTweetFormCommentWidget();
    commentWidgetElement.videoUrlWidgetElement.sendKeys('Hello world');
    const videoUrlWidgetElement = page.getTweetFormVideoUrlWidget();
    videoUrlWidgetElement.videoUrlWidgetElement.sendKeys('youtube.com/testing');
    const tweetLinkWidgetElement = page.getTweetFormTweetLinkWidget();
    expect(tweetLinkWidgetElement.getAttribute('href')).toEqual(
      'https://twitter.com/intent/tweet?text=Hello world youtube.com/testing&hashtags=nowPlaying'
    );
  });

});
