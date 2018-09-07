# TweetsReader

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Unit testing result

![Unit Test Result](https://res.cloudinary.com/sqrz-cdn/image/upload/v1536295261/Screenshot_from_2018-09-06_23-38-45.png)

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

e2e Test Result
```
Jasmine started

  e2e Tests
    ✓ should display title
    ✓ should display default subtitle
    ✓ should display default description
    ✓ should display tweet form
    ✓ tweet form should display video url widget
    ✓ tweet form should display video url placeholder as "Video URL:"
    ✓ tweet form video url widget should display default value as youtube.com/
    ✓ tweet form video url widget label should be equal to "Video URL:"
    ✓ tweet form should display comment widget
    ✓ tweet form should display comment widget label
    ✓ tweet form comment widget label should be equal to "Comment:"
    ✓ tweet form should display tweet link button
    ✓ tweet form tweet link button should have target=_blank attribute
[23:30:53] W/element - more than one element found for locator By(css selector, app-root app-tweet-form a.tweet-link span) - the first result will be used
    ✓ tweet form tweet link button should display "Tweet to #nowPlaying" comment
    ✓ tweet form tweet link button default href value should be https://twitter.com/intent/tweet?text=yotube.com/&hashtags=nowPlaying
    ✓ tweet form tweet link button default href value should be https://twitter.com/intent/tweet?text=youtube.com/testing&hashtags=nowPlaying when change video url value
    ✓ tweet form tweet link button default href value should be https://twitter.com/intent/tweet?text=Hello%20World%20youtube.com/&hashtags=nowPlaying when change comment value
    ✓ tweet form tweet link button default href value should be https://twitter.com/intent/tweet?text=Hello%20World%20youtube.com/testing&hashtags=nowPlaying when change comment and video url values
    ✓ should display 5 tweet results widgets
[23:31:04] W/element - more than one element found for locator By(css selector, app-root app-tweet-result .result-title h2) - the first result will be used
    ✓ tweet result should display a title with content
    ✓ tweet result should display a video widget
[23:31:15] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-video iframe.video-player) - the first result will be used
    ✓ tweet result video widget should come from youtube
    ✓ tweet result should display a content widget
    ✓ tweet result content should display a twitter logo
[23:31:17] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div.user-profile div.user-profile-image img) - the first result will be used
    ✓ tweet result content should display a user profile image with source
[23:31:17] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div.user-profile div.username a.username-link) - the first result will be used
[23:31:17] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div.user-profile div.username a.username-link) - the first result will be used
    ✓ tweet result content should display username
[23:31:18] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div.user-profile div.screen-name span) - the first result will be used
    ✓ tweet result content should display screen name
[23:31:19] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div.user-profile a.follow-link) - the first result will be used
[23:31:19] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div.user-profile a.follow-link) - the first result will be used
    ✓ tweet result content should display follow button with Follow label
[23:31:20] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div.tweet-text h3) - the first result will be used
    ✓ tweet result content should display tweet text with content
[23:31:20] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div a.reply-link) - the first result will be used
    ✓ tweet result content should display reply button
[23:31:21] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div.buttons a.retweet-link) - the first result will be used
    ✓ tweet result content should display retweet button
[23:31:22] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div a.like-link) - the first result will be used
    ✓ tweet result content should display like button
[23:31:22] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div.date span) - the first result will be used
    ✓ tweet result content should display tweet date with content

Executed 33 of 33 specs SUCCESS in 39 secs.
[23:31:22] I/launcher - 0 instance(s) of WebDriver still running
[23:31:22] I/launcher - chrome #01 passed
Jasmine started

  e2e Tests
    ✓ should display title
    ✓ should display default subtitle
    ✓ should display default description
    ✓ should display tweet form
    ✓ tweet form should display video url widget
    ✓ tweet form should display video url placeholder as "Video URL:"
    ✓ tweet form video url widget should display default value as youtube.com/
    ✓ tweet form video url widget label should be equal to "Video URL:"
    ✓ tweet form should display comment widget
    ✓ tweet form should display comment widget label
    ✓ tweet form comment widget label should be equal to "Comment:"
    ✓ tweet form should display tweet link button
    ✓ tweet form tweet link button should have target=_blank attribute
[23:30:53] W/element - more than one element found for locator By(css selector, app-root app-tweet-form a.tweet-link span) - the first result will be used
    ✓ tweet form tweet link button should display "Tweet to #nowPlaying" comment
    ✓ tweet form tweet link button default href value should be https://twitter.com/intent/tweet?text=yotube.com/&hashtags=nowPlaying
    ✓ tweet form tweet link button default href value should be https://twitter.com/intent/tweet?text=youtube.com/testing&hashtags=nowPlaying when change video url value
    ✓ tweet form tweet link button default href value should be https://twitter.com/intent/tweet?text=Hello%20World%20youtube.com/&hashtags=nowPlaying when change comment value
    ✓ tweet form tweet link button default href value should be https://twitter.com/intent/tweet?text=Hello%20World%20youtube.com/testing&hashtags=nowPlaying when change comment and video url values
    ✓ should display 5 tweet results widgets
[23:31:04] W/element - more than one element found for locator By(css selector, app-root app-tweet-result .result-title h2) - the first result will be used
    ✓ tweet result should display a title with content
    ✓ tweet result should display a video widget
[23:31:15] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-video iframe.video-player) - the first result will be used
    ✓ tweet result video widget should come from youtube
    ✓ tweet result should display a content widget
    ✓ tweet result content should display a twitter logo
[23:31:17] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div.user-profile div.user-profile-image img) - the first result will be used
    ✓ tweet result content should display a user profile image with source
[23:31:17] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div.user-profile div.username a.username-link) - the first result will be used
[23:31:17] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div.user-profile div.username a.username-link) - the first result will be used
    ✓ tweet result content should display username
[23:31:18] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div.user-profile div.screen-name span) - the first result will be used
    ✓ tweet result content should display screen name
[23:31:19] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div.user-profile a.follow-link) - the first result will be used
[23:31:19] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div.user-profile a.follow-link) - the first result will be used
    ✓ tweet result content should display follow button with Follow label
[23:31:20] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div.tweet-text h3) - the first result will be used
    ✓ tweet result content should display tweet text with content
[23:31:20] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div a.reply-link) - the first result will be used
    ✓ tweet result content should display reply button
[23:31:21] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div.buttons a.retweet-link) - the first result will be used
    ✓ tweet result content should display retweet button
[23:31:22] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div a.like-link) - the first result will be used
    ✓ tweet result content should display like button
[23:31:22] W/element - more than one element found for locator By(css selector, app-root app-tweet-result div.result-content app-tweet-content div.date span) - the first result will be used
    ✓ tweet result content should display tweet date with content

Executed 33 of 33 specs SUCCESS in 39 secs.
[23:31:22] I/launcher - 0 instance(s) of WebDriver still running
[23:31:22] I/launcher - chrome #01 passed

```

## Libraries

 - Underscore, used to access easily object properties, used on unit test
 - RelativeDate pipe, used to transform dates to relative date string, author: https://gist.github.com/JonCatmull/e00afb1c96298a4e386ea1b5d091702a
 - Angular Material, to make easy to apply material css to this form 
 
# Author
 - Hansel Ramos
   hansell.ramos@gmail.com
   
## Notes
  Twiter results comes from mock data retrieved previusly from twitter, but is static data and this results are general, not from an specific location
  
  I need one more day to do that, I really appreciate the oportunity, is not complete, but my mayor focus was on app quality implementing unit test and automation test
