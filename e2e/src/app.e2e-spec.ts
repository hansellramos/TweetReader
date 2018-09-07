import { AppPage } from './app.po';
import {browser} from 'protractor';

describe('e2e Tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });
  browser.ignoreSynchronization = true;
  browser.waitForAngularEnabled(false);
  /**
   * App Component Tests
   */
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

  /**
   * Tweet Form Component tests
   */
  it('should display tweet form', () => {
    expect(page.getTweetForm().isPresent()).toBeTruthy();
  });
  it('tweet form should display video url widget', () => {
    const videoUrlWidgetElement = page.getTweetFormVideoUrlWidget();
    expect(videoUrlWidgetElement.isPresent()).toBeTruthy();
  });
  it('tweet form should display video url placeholder as "Video URL:"', () => {
    const videoUrlWidgetElement = page.getTweetFormVideoUrlWidget();
    expect(videoUrlWidgetElement.getAttribute('placeholder')).toEqual('Video URL:');
  });
  it('tweet form video url widget should display default value as youtube.com/', () => {
    const videoUrlWidgetElement = page.getTweetFormVideoUrlWidget();
    expect(videoUrlWidgetElement.getAttribute('value')).toEqual('youtube.com/');
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
    'https://twitter.com/intent/tweet?text=yotube.com/&hashtags=nowPlaying', () => {
    const tweetLinkWidgetElement = page.getTweetFormTweetLinkWidget();
    expect(tweetLinkWidgetElement.getAttribute('href')).toEqual(
      'https://twitter.com/intent/tweet?text=youtube.com/&hashtags=nowPlaying'
    );
  });
  it('tweet form tweet link button default href value should be ' +
    'https://twitter.com/intent/tweet?text=youtube.com/testing&hashtags=nowPlaying ' +
    'when change video url value', () => {
    const videoUrlWidgetElement = page.getTweetFormVideoUrlWidget();
    videoUrlWidgetElement.clear();
    videoUrlWidgetElement.sendKeys('youtube.com/testing');
    const tweetLinkWidgetElement = page.getTweetFormTweetLinkWidget();
    expect(tweetLinkWidgetElement.getAttribute('href')).toEqual(
      'https://twitter.com/intent/tweet?text=youtube.com/testing&hashtags=nowPlaying'
    );
  });
  it('tweet form tweet link button default href value should be ' +
    'https://twitter.com/intent/tweet?text=Hello%20World%20youtube.com/&hashtags=nowPlaying ' +
    'when change comment value', () => {
    const commentWidgetElement = page.getTweetFormCommentWidget();
    commentWidgetElement.sendKeys('Hello world');
    const tweetLinkWidgetElement = page.getTweetFormTweetLinkWidget();
    expect(tweetLinkWidgetElement.getAttribute('href')).toEqual(
      'https://twitter.com/intent/tweet?text=Hello%20world%20youtube.com/&hashtags=nowPlaying'
    );
  });
  it('tweet form tweet link button default href value should be ' +
    'https://twitter.com/intent/tweet?text=Hello%20World%20youtube.com/testing&hashtags=nowPlaying ' +
    'when change comment and video url values', () => {
    const commentWidgetElement = page.getTweetFormCommentWidget();
    commentWidgetElement.sendKeys('Hello world');
    const videoUrlWidgetElement = page.getTweetFormVideoUrlWidget();
    videoUrlWidgetElement.clear();
    videoUrlWidgetElement.sendKeys('youtube.com/testing');
    const tweetLinkWidgetElement = page.getTweetFormTweetLinkWidget();
    expect(tweetLinkWidgetElement.getAttribute('href')).toEqual(
      'https://twitter.com/intent/tweet?text=Hello%20world%20youtube.com/testing&hashtags=nowPlaying'
    );
  });

  /**
   * Tweet Results Tests
   */
  it('should display 5 tweet results widgets', () => {
    expect(page.getAllTweetResults().count()).toEqual(5);
  });
  it('tweet result should display a title with content', () => {
    browser.sleep(5000); // wait for youtube videos load
    const element = page.getTweetResultWidgetTitle();
    expect(element.isPresent()).toBeTruthy();
    expect(element.getText()).not.toEqual('');
  });
  it('tweet result should display a video widget', () => {
    browser.sleep(5000); // wait for youtube videos load
    const element = page.getTweetResultVideoWidget();
    expect(element.isPresent()).toBeTruthy();
  });
  it('tweet result video widget should come from youtube', () => {
    browser.sleep(5000); // wait for youtube videos load
    const element = page.getTweetResultVideoWidget();
    expect(element.getAttribute('src')).toMatch('^(https?\\:\\/\\/)?(www\\.)?(youtube\\.com|youtu\\.?be)\\/.+$');
  });
  it('tweet result should display a content widget', () => {
    const element = page.getTweetResultContentWidget();
    expect(element.isPresent()).toBeTruthy();
  });
  it('tweet result content should display a twitter logo', () => {
    const element = page.getTweetResultContentTwitterLogo();
    expect(element.isPresent()).toBeTruthy();
  });
  it('tweet result content should display a user profile image with source', () => {
    const element = page.getTweetResultContentUserProfilePicture();
    expect(element.isPresent()).toBeTruthy();
    expect(element.getAttribute('src')).toContain('https://pbs.twimg.com/profile_images/');
  });
  it('tweet result content should display username', () => {
    const element = page.getTweetResultContentUsernameWidget();
    expect(element.isPresent()).toBeTruthy();
    expect(element.getText()).not.toEqual('');
    expect(element.getAttribute('target')).toEqual('_blank');
  });
  it('tweet result content should display screen name', () => {
    const element = page.getTweetResultContentUserScreenNameWidget();
    expect(element.isPresent()).toBeTruthy();
    expect(element.getText()).not.toEqual('');
  });
  it('tweet result content should display follow button with Follow label', () => {
    const element = page.getTweetResultContentUserFollowButtonLink();
    expect(element.isPresent()).toBeTruthy();
    expect(element.getText()).toContain('Follow');
    expect(element.getAttribute('target')).toEqual('_blank');
  });
  it('tweet result content should display tweet text with content', () => {
    const element = page.getTweetResultContentTweet();
    expect(element.isPresent()).toBeTruthy();
    expect(element.getText()).not.toEqual('');
  });
  it('tweet result content should display reply button', () => {
    const element = page.getTweetResultContentUserReplyButtonLink();
    expect(element.isPresent()).toBeTruthy();
    expect(element.getAttribute('target')).toEqual('_blank');
  });
  it('tweet result content should display retweet button', () => {
    const element = page.getTweetResultContentUserRetweetButtonLink();
    expect(element.isPresent()).toBeTruthy();
    expect(element.getAttribute('target')).toEqual('_blank');
  });
  it('tweet result content should display like button', () => {
    const element = page.getTweetResultContentUserLikeButtonLink();
    expect(element.isPresent()).toBeTruthy();
    expect(element.getAttribute('target')).toEqual('_blank');
  });
  it('tweet result content should display tweet date with content', () => {
    const element = page.getTweetResultContentUserDateWidget();
    expect(element.isPresent()).toBeTruthy();
    expect(element.getText()).not.toEqual('');
  });
});
