import { environment } from './environments/environment';
import * as _ from 'underscore';

describe('Env Variables Test', () => {
  it('Environment should have apis property', () => {
    expect(_.has(environment, 'apis')).toBeTruthy();
  });
  it('Environment should have apis.twitter property', () => {
    expect(_.has(environment.apis, 'twitter')).toBeTruthy();
  });
  it('Environment should have apis.twitter.consumer_key property', () => {
    expect(_.has(environment.apis.twitter, 'consumer_key')).toBeTruthy();
  });
  it('Environment should have apis.twitter.consumer_secret property', () => {
    expect(_.has(environment.apis.twitter, 'consumer_secret')).toBeTruthy();
  });
  it('Environment should have apis.twitter.token property', () => {
    expect(_.has(environment.apis.twitter, 'token')).toBeTruthy();
  });
  it('Environment should have apis.twitter.token_secret property', () => {
    expect(_.has(environment.apis.twitter, 'token_secret')).toBeTruthy();
  });
});
