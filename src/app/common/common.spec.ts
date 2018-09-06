import {getYoutubeVideoIdFromUrlString} from './common';

describe('Common functions test', () => {
  it ('getYoutubeVideoIdFromUrlString should return youtube video id', () => {
    expect(getYoutubeVideoIdFromUrlString('https://youtube.com/watch?v=videoId')).toEqual('videoId');
    expect(getYoutubeVideoIdFromUrlString('http://youtube.com/watch?v=videoId')).toEqual('videoId');
    expect(getYoutubeVideoIdFromUrlString('youtube.com/watch?v=videoId')).toEqual('videoId');
    expect(getYoutubeVideoIdFromUrlString('https://youtube.com/watch?v=videoId&feature=youtu.be')).toEqual('videoId');
    expect(getYoutubeVideoIdFromUrlString('http://youtube.com/watch?v=videoId&feature=youtu.be')).toEqual('videoId');
    expect(getYoutubeVideoIdFromUrlString('youtube.com/watch?v=videoId&feature=youtu.be')).toEqual('videoId');
    expect(getYoutubeVideoIdFromUrlString('https://youtu.be/videoId')).toEqual('videoId');
    expect(getYoutubeVideoIdFromUrlString('http://youtu.be/videoId')).toEqual('videoId');
    expect(getYoutubeVideoIdFromUrlString('youtu.be/videoId')).toEqual('videoId');
  });
});
