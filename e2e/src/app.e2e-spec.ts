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
  it('tweet form should display video url placeholder as "youtube.com/"', () => {
    const videoUrlWidgetElement = page.getTweetFormVideoUrlWidget();
    expect(videoUrlWidgetElement.getAttribute('placeholder')).toEqual('youtube.com/');
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
  it('tweet form tweet link button should have target=_blank attribute', () => {
    const tweetLinkWidgetElement = page.getTweetFormTweetLinkWidget();
    expect(tweetLinkWidgetElement.getAttribute('target')).toEqual('_blank');
  });
  it('tweet form tweet link button should display "Tweet to #nowPlaying" comment', () => {
    expect(page.getTweetFormTweetLinkWidgetText()).toEqual('Tweet to #nowPlaying');
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
    videoUrlWidgetElement.sendKeys('youtube.com/testing');
    const tweetLinkWidgetElement = page.getTweetFormTweetLinkWidget();
    expect(tweetLinkWidgetElement.getAttribute('href')).toEqual(
      'https://twitter.com/intent/tweet?text=youtube.com/testing&hashtags=nowPlaying'
    );
  });
  it('tweet form tweet link button default href value should be ' +
    'https://twitter.com/intent/tweet?text=Hello%20World&hashtags=nowPlaying ' +
    'when change comment value', () => {
    const commentWidgetElement = page.getTweetFormCommentWidget();
    commentWidgetElement.sendKeys('Hello world');
    const tweetLinkWidgetElement = page.getTweetFormTweetLinkWidget();
    expect(tweetLinkWidgetElement.getAttribute('href')).toEqual(
      'https://twitter.com/intent/tweet?text=Hello%20world&hashtags=nowPlaying'
    );
  });
  it('tweet form tweet link button default href value should be ' +
    'https://twitter.com/intent/tweet?text=Hello%20World%20youtube.com/testing&hashtags=nowPlaying ' +
    'when change comment and video url values', () => {
    const commentWidgetElement = page.getTweetFormCommentWidget();
    commentWidgetElement.sendKeys('Hello world');
    const videoUrlWidgetElement = page.getTweetFormVideoUrlWidget();
    videoUrlWidgetElement.sendKeys('youtube.com/testing');
    const tweetLinkWidgetElement = page.getTweetFormTweetLinkWidget();
    expect(tweetLinkWidgetElement.getAttribute('href')).toEqual(
      'https://twitter.com/intent/tweet?text=Hello%20world%20youtube.com/testing&hashtags=nowPlaying'
    );
  });

});
